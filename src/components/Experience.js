import React from "react";
import { FaBriefcase } from "react-icons/fa";


const experiences = [
{
company: "TCS",
title: "IT Analyst (SDET 2)",
location: "India",
period: "May 2026 – Present",
description:
"Currently working as a Software Development Engineer in Test (SDET 2), focusing on test automation, API testing, quality engineering, CI/CD integration, and enterprise application delivery."
},
{
company: "Atos",
title: "Senior Associate",
location: "Remote / India",
period: "Dec 2021 – May 2026",
description:
"Worked as a Java Backend Developer, QA Analyst, and AWS Functional Architect across enterprise automotive and financial projects.",
projects: [
{
name: "Stellantis (Majestic Vehicle Platform)",
role: "Java Backend Developer, QA Analyst & AWS Functional Architect"
},
{
name: "NEST Workplace Pension Scheme",
role: "Backend QA & API Integration"
}
]
}
];

const Experience = () => {
return ( <section
   id="experience"
   className="max-w-4xl mx-auto py-16 px-4"
   data-aos="fade-up"
 > <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"> <FaBriefcase className="text-primary-400" />
Experience </h2>

```
  {experiences.map((exp, index) => (
    <div
      key={index}
      className="mb-10 border-l-2 border-primary-400 pl-6"
    >
      <h3 className="text-2xl font-semibold">{exp.company}</h3>

      <p className="text-primary-400 font-medium">
        {exp.title}
      </p>

      <p className="text-sm text-gray-500 mb-3">
        {exp.location} | {exp.period}
      </p>

      <p className="text-gray-300 mb-4">
        {exp.description}
      </p>

      {exp.projects && (
        <div>
          <h4 className="font-semibold mb-3">
            Key Projects
          </h4>

          {exp.projects.map((project, idx) => (
            <div key={idx} className="mb-3 ml-4">
              <h5 className="font-medium text-primary-400">
                {project.name}
              </h5>

              <p className="text-sm text-gray-400">
                {project.role}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</section>
);
};

export default Experience;
