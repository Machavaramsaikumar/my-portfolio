import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cloud, PenTool as Tool, Bug as Testing, ClipboardCheck as Agile, Layers as Architecture } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description, delay }: {
  icon: typeof Code2;
  title: string;
  description: string;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="group p-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div className="relative">
          <Icon className="w-10 h-10 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="mb-12 text-lg text-gray-600 dark:text-gray-300 space-y-6"
          >
            <p>
              I'm a passionate Java Developer with over 3 years of experience in building scalable backend solutions.
              My expertise lies in developing robust microservices, RESTful APIs, and cloud-native applications.
              I'm dedicated to writing clean, efficient code and solving complex problems.
            </p>
            <p>
              Alongside development, I have hands-on experience in <strong>Manual Testing</strong>, ensuring software quality
              by conducting test case execution, debugging, and defect tracking.
              I have worked extensively with <strong>SFTP protocols</strong> for secure file transfers and <strong>validating applications in multiple environments</strong>,
              ensuring high accuracy and reliability.
            </p>
            <p>
              I work in an <strong>Agile (SCRUM)</strong> environment, collaborating with cross-functional teams on sprint planning,
              backlog grooming, and defect tracking using <strong>JIRA</strong>. This enables me to streamline development workflows and 
              improve issue resolution speed.
            </p>
            <p>
              As a <strong>Jr. Functional Architect</strong>, I collaborate with cross-functional teams and lead architectural documentation 
              for different modules. I work with **ELK Stack (Elasticsearch, Logstash, Kibana)** for **log monitoring and analytics**, ensuring 
              system performance and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard
              icon={Code2}
              title="Backend Development"
              description="Java, Spring Boot, Microservices, RESTful APIs"
              delay={0.2}
            />
            <SkillCard
              icon={Database}
              title="Database Management"
              description="Oracle, PostgreSQL, Query Optimization"
              delay={0.4}
            />
            <SkillCard
              icon={Cloud}
              title="Cloud Technologies"
              description="AWS, Azure, Cloud-Native Development"
              delay={0.6}
            />
            <SkillCard
              icon={Tool}
              title="Development Tools"
              description="Git, CI/CD, JIRA, Testing Frameworks"
              delay={0.8}
            />
            <SkillCard
              icon={Testing}
              title="Manual Testing"
              description="Test Case Design, Execution, Defect Tracking, SFTP Validation"
              delay={1.0}
            />
            <SkillCard
              icon={Agile}
              title="Agile & JIRA"
              description="Sprint Planning, Backlog Grooming, Bug Tracking"
              delay={1.2}
            />
            <SkillCard
              icon={Architecture}
              title="Jr. Functional Architect"
              description="Cross-Functional Collaboration, ELK Stack, Architectural Documentation"
              delay={1.4}
            />
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <a
              href="https://linkedin.com/in/saikumar-machavaram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Connect on LinkedIn
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
