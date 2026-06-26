import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

// Helper function for email validation
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState("email");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Change handler for inputs
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus("");
  };

  // EmailJS form submission
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    // <<< REPLACE BELOW WITH YOUR REAL EmailJS IDs from emailjs.com dashboard!
    emailjs.send(
      "YOUR_SERVICE_ID",    // e.g. 'service_q1xyz09'
      "YOUR_TEMPLATE_ID",   // e.g. 'template_ab123cd'
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "YOUR_USER_ID"        // e.g. 'AbCDEFghijkLmN0P'
    )
      .then(() => {
        setSubmitting(false);
        setStatus("Message sent! Thank you.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSubmitting(false);
        setStatus("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="max-w-xl mx-auto py-16 px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-primary-400">Contact</h2>
      <div className="bg-white/5 rounded-xl shadow-xl px-6 py-7 mb-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-7">
          <button
            onClick={() => setActiveTab("email")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-base transition 
              ${activeTab === "email"
                ? "bg-primary-500 text-white shadow"
                : "bg-gray-800/30 text-primary-400 hover:bg-gray-700/40"}`}
            aria-selected={activeTab === "email"}
          >
            <FaEnvelope /> Email
          </button>
          <button
            onClick={() => setActiveTab("linkedin")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-base transition
              ${activeTab === "linkedin"
                ? "bg-primary-500 text-white shadow"
                : "bg-gray-800/30 text-primary-400 hover:bg-gray-700/40"}`}
            aria-selected={activeTab === "linkedin"}
          >
            <FaLinkedin /> LinkedIn
          </button>
        </div>

        {/* Email Tab */}
        {activeTab === "email" && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
            <label className="font-medium text-gray-100" htmlFor="name">
              Name<span className="text-primary-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-primary-400"
              type="text"
              placeholder="Your Name"
              required
              autoComplete="off"
            />

            <label className="font-medium text-gray-100" htmlFor="email">
              Email<span className="text-primary-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-primary-400"
              type="email"
              placeholder="your@email.com"
              required
              autoComplete="off"
            />

            <label className="font-medium text-gray-100" htmlFor="message">
              Message<span className="text-primary-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 resize-none min-h-[100px] focus:outline-primary-400"
              rows={5}
              placeholder="Write your message..."
              required
            />

            <button
              type="submit"
              className="mt-2 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-7 font-semibold rounded-lg shadow transition"
              disabled={submitting}
            >
              <FaPaperPlane /> {submitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <div className={`mt-3 text-sm ${status.includes("sent") ? "text-green-400" : "text-red-400"}`}>{status}</div>
            )}
          </form>
        )}

        {/* LinkedIn Tab */}
        {activeTab === "linkedin" && (
          <div className="flex flex-col items-center justify-center mt-4">
            <a
              href="https://www.linkedin.com/in/saikumar-machavaram-400575214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-lg shadow transition"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="text-2xl" />
              Connect on LinkedIn
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
