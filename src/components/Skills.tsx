import React from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: 'Backend Development',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'Microservices', level: 82 },
    ],
  },
  {
    category: 'Database Management',
    items: [
      { name: 'Oracle SQL Developer', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    category: 'Cloud Technologies',
    items: [
      { name: 'AWS', level: 75 },
      { name: 'Azure', level: 70 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', level: 85 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'JIRA', level: 85 },
      { name: 'Postman', level: 90 },
    ],
  },
  {
    category: 'Manual Testing & QA',
    items: [
      { name: 'Test Case Design', level: 85 },
      { name: 'Test Execution', level: 88 },
      { name: 'Bug Tracking', level: 80 },
      { name: 'SFTP Validation', level: 75 },
    ],
  },
  {
    category: 'Agile & Architecture',
    items: [
      { name: 'Agile (SCRUM)', level: 85 },
      { name: 'ELK Stack (Elasticsearch, Logstash, Kibana)', level: 80 },
      { name: 'Architectural Documentation', level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
