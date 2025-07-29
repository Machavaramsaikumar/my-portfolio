import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-6 text-center bg-gray-100 dark:bg-gray-800">
    <div className="flex justify-center gap-6 mb-2">
      <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className="text-2xl" />
      </a>
      <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className="text-2xl" />
      </a>
      <a href="/resume.pdf" download aria-label="Resume">
        <FaFilePdf className="text-2xl" />
      </a>
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Saikumar Machavaram. All rights reserved.
    </div>
  </footer>
);

export default Footer;