import React from 'react';
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Associate",
    company: "Atos",
    location: "Remote / India",
    period: "Dec 2021 – Present",
    description:
      "Engineering scalable backend solutions, API integrations, and QA for enterprise automotive and financial platforms. Strong focus on Java development, AWS architecture, and quality assurance in Agile teams.",
    projects: [
      {
        name: "Stellantis (Majestic Vehicle Platform)",
        role: "Java Backend Developer, QA Analyst & AWS Functional Architect",
        bullets: [
          "Designed, developed, and maintained robust Java-based backend services for global vehicle data platforms, supporting large automotive brands under Stellantis.",
          "Engineered and secured REST APIs (Spring Boot) for vehicle data, activation, and onboarding, including implementation of JWT authentication, RBAC, and advanced validation logic.",
          "Automated deployments and optimized infrastructure using AWS cloud services and Dockerized pipelines with Jenkins, resulting in faster release cycles and improved reliability.",
          "Acted as QA Analyst: created, executed, and automated backend API test cases (Postman/JUnit/Mockito), achieving high test coverage and proactively preventing integration issues.",
          "Led implementation of version upgrades, regex validation features, and architecture documentation for seamless team knowledge transfer.",
          "Collaborated with distributed Agile teams for backlog refinement, sprint deliverables, and continuous process improvement, fostering code maintainability and team learning."
        ],
        tech: [
          "Java", "Spring Boot", "AWS", "REST API", "Docker", "Jenkins",
          "JWT", "Oracle SQL", "Postman", "JUnit", "Mockito", "RBAC"
        ]
      },
      {
        name: "NEST Workplace Pension Scheme",
        role: "Backend QA & API Integration",
        bullets: [
          "Developed and tested backend APIs for secure pension data integrations with leading partners.",
          "Created comprehensive manual/automated API test plans (Postman), ensuring robust error handling and data consistency.",
          "Collaborated on migration efforts using Azure Functions and PostgreSQL, improving data flow reliability.",
          "Enhanced release management through sprint planning, defect tracking, and peer review in JIRA."
        ],
        tech: [
          "Java", "Spring Boot", "Azure", "REST API", "Postman", "Jira", "PostgreSQL"
        ]
      }
    ]
  }
];

const Experience = () => (
  <section id="experience" className="max-w-3xl mx-auto py-16 px-4" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
      <FaBriefcase className="text-primary-400" /> Experience
    </h2>
    {experiences.map((exp, idx) => (
      <div key={idx} className="mb-12">
        <div>
          <h3 className="text-xl font-semibold">
            {exp.title}, <span className="text-primary-400">{exp.company}</span>
          </h3>
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">
            {exp.location} &nbsp; | &nbsp; {exp.period}
          </div>
          <p className="text-gray-400 mb-3">{exp.description}</p>
        </div>
        {exp.projects.map((project, pidx) => (
          <div key={pidx} className="mb-7">
            <h4 className="text-lg font-bold text-primary-400">{project.name}</h4>
            <div className="italic text-sm text-gray-400 mb-2">{project.role}</div>
            <ul className="list-disc list-inside mb-2 text-gray-200">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-blue-900/50 text-sky-300 rounded-full px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </section>
);

export default Experience;
