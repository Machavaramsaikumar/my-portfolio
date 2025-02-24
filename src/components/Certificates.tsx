import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Issued: Jan 2024",
    credentialUrl: "https://www.credly.com/badges/your-azure-badge",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/5326566_fb49_10.jpg",  // Corrected Azure Image URL from Google
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued: Dec 2023",
    credentialUrl: "https://www.credly.com/badges/your-aws-badge",
    imageUrl: "https://img-c.udemycdn.com/open-badges/v2/badge-class/1836431138/image771495085737125892.png",  // AWS Cloud Practitioner Image
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Issued: Feb 2024",
    credentialUrl: "https://www.credly.com/badges/your-solution-architect-badge",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/5914092_588d_2.jpg",  // AWS Solutions Architect Image
  },
];

export default function Certificates() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* ✅ Certification Image */}
              <div className="relative w-full h-48 mb-4">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                  onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/300?text=Image+Not+Found")} // Fallback Image
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400">{cert.date}</p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
