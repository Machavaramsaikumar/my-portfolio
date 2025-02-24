import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <ParticlesBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600">Saikumar Machavaram</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  'Java Developer',
                  2000,
                  'Manual Tester',
                  2000,
                  'Jr. Functional Architect',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold"
              />
            </div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1UKS0S8QIPCASbCocOdxLHg8tPUdJBBLJ" // Google Drive Direct Download Link
                download="Saikumar_Machavaram_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Download className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg border-2 border-blue-600 text-blue-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Mail className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </motion.a>
            </motion.div>
            <motion.div 
              className="flex justify-center md:justify-start space-x-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://linkedin.com/in/saikumar-machavaram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/saikumar-machavaram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-blue-600 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGPQ7Zbkceb1A/profile-displayphoto-shrink_400_400/B56ZUxXpjXGUAk-/0/1740290038470?e=1746057600&amp;v=beta&amp;t=TtA_YAvgMiEouHg4lNW7pza7cyUsf8EUAfwXKgbDoCA"
                  alt="Saikumar Machavaram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
