import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

declare global {
  interface Window {
    emailjs: any;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // ✅ Load the latest version of EmailJS from the official CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);
    
    script.onload = () => console.log('✅ EmailJS SDK Loaded Successfully');
    script.onerror = () => console.error('❌ Failed to load EmailJS SDK');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.emailjs) {
      console.error('❌ EmailJS library not loaded.');
      setError('Email service not available. Try again later.');
      return;
    }

    try {
      const response = await window.emailjs.send(
        'service_47ojte8',  // ✅ Replace with your latest Service ID
        'template_0rad57g',  // ✅ Replace with your latest Template ID
        {
          email: formData.email,
          message: formData.message,
        },
        'KlwHraJujZ1KY5503'  // ✅ Replace with your latest Public Key
      );

      console.log('✅ Email sent successfully:', response);
      setIsSent(true);
      setError('');
      setFormData({ email: '', message: '' });
    } catch (err) {
      console.error('❌ EmailJS Error:', err);
      setError('❌ Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* ✅ Profile Picture + Social Links */}
          <div className="text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden border-4 border-blue-600">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGPQ7Zbkceb1A/profile-displayphoto-shrink_400_400/B56ZUxXpjXGUAk-/0/1740290038470?e=1746057600&v=beta&t=TtA_YAvgMiEouHg4lNW7pza7cyUsf8EUAfwXKgbDoCA"
                alt="Saikumar Machavaram"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <a
                href="mailto:machavaramsaim@gmail.com"
                className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-5 h-5 mr-2" />
                machavaramsaim@gmail.com
              </a>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <a
                  href="https://linkedin.com/in/saikumar-machavaram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/saikumar-machavaram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>

            {/* ✅ Success Message */}
            {isSent && (
              <p className="mt-4 text-green-600 text-center font-semibold">
                ✅ Message Sent! I'll get back to you soon.
              </p>
            )}

            {/* ❌ Error Message */}
            {error && (
              <p className="mt-4 text-red-600 text-center font-semibold">
                ❌ {error}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
