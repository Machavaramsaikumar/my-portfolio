import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow w-full z-50">
    <div className="font-bold text-xl text-gray-900 dark:text-white">Saikumar Machavaram</div>
    <div className="flex gap-6 items-center">
      <a href="#about" className="hover:text-blue-600 text-gray-900 dark:text-white">About</a>
      <a href="#skills" className="hover:text-blue-600 text-gray-900 dark:text-white">Skills</a>
      <a href="#projects" className="hover:text-blue-600 text-gray-900 dark:text-white">Projects</a>
      <a href="#experience" className="hover:text-blue-600 text-gray-900 dark:text-white">Experience</a>
      <a href="#contact" className="hover:text-blue-600 text-gray-900 dark:text-white">Contact</a>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;