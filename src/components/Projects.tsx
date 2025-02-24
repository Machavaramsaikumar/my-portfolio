import React from 'react';
import { Car, Wallet } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Stellantis Project</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Vehicle data processing system using Java, Spring Boot, AWS, and REST APIs.
                Implemented efficient data processing pipelines and optimized API responses.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-200 mr-2">Achievements:</span>
                  <span className="text-gray-600 dark:text-gray-300">40% improvement in data efficiency</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-200 mr-2">Performance:</span>
                  <span className="text-gray-600 dark:text-gray-300">35% faster API responses</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Wallet className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nest Pension Scheme</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pension data processing system using Azure Functions and PostgreSQL.
                Implemented robust data validation and processing workflows.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-200 mr-2">Reliability:</span>
                  <span className="text-gray-600 dark:text-gray-300">50% improvement in system reliability</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-200 mr-2">Quality:</span>
                  <span className="text-gray-600 dark:text-gray-300">90% defect resolution pre-deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}