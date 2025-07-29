import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons
import { FaJava, FaAws } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiDocker,
  SiJenkins,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiPostman,
  SiLinux,
  SiSwagger,
  SiApachemaven,
  SiGit,
  SiJira,
} from "react-icons/si";

// Skill array, grouped logically by technology (you can adjust order as desired)
const skills = [
  // Backend & Java
  { name: "Java", icon: <FaJava /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },

  // Added Microservices (icon proxy: Docker)
  { name: "Microservices", icon: <SiDocker /> },

  { name: "Maven", icon: <SiApachemaven /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Linux", icon: <SiLinux /> },

  // Cloud & DevOps
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Jenkins", icon: <SiJenkins /> },

  // Databases
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Oracle SQL", icon: <SiOracle /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },

  // DB Tools
  { name: "pgAdmin", icon: <SiPostgresql /> }, // No separate icon, reused PostgreSQL

  // API & Manual Testing
  { name: "API Testing", icon: <SiSwagger /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "ALM/QC", icon: <SiJenkins /> }, // No dedicated icon, proxy with Jenkins
  { name: "Jira Agile", icon: <SiJira /> }, // Newly added Jira Agile

  // Add more as needed
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1300,
  pauseOnHover: true,
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);

  return (
    <section id="skills" className="py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-8 text-white" data-aos="fade-up">
        Skills
      </h2>
      <div data-aos="fade-up">
        <Slider {...sliderSettings}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex flex-col items-center rounded-xl p-8 shadow-lg">
                <div className="text-6xl mb-4 text-primary-400">{skill.icon}</div>
                <span className="text-2xl text-white">{skill.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
