import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-blue-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">Present</time>
              <div className="text-xl font-bold text-gray-900 dark:text-white">Java Developer</div>
            </div>
            <div className="text-gray-500 dark:text-gray-400">Eviden</div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Developing and maintaining RESTful APIs using Spring Boot</li>
                <li>Implementing multithreading solutions for improved performance</li>
                <li>Query optimization for better database performance</li>
                <li>OAuth 2.0 implementation for secure authentication</li>
                <li>SFTP handling for secure file transfers</li>
                <li>Collaborating with cross-functional teams in an Agile environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}