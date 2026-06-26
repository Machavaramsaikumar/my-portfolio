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
  SiSwagger,
  SiApachemaven,
  SiGit,
  SiJira,
} from "react-icons/si";

const skills = [
  // Programming & Backend
  { name: "Java", icon: <FaJava /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Microservices", icon: <SiDocker /> },
  { name: "REST APIs", icon: <SiSwagger /> },

  // Automation Testing
  { name: "Selenium", icon: <FaJava /> },
  { name: "TestNG", icon: <FaJava /> },
  { name: "API Testing", icon: <SiSwagger /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Swagger", icon: <SiSwagger /> },

  // DevOps & Build Tools
  { name: "Maven", icon: <SiApachemaven /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Docker", icon: <SiDocker /> },

  // Cloud
  { name: "AWS", icon: <FaAws /> },

  // Databases
  { name: "Oracle SQL", icon: <SiOracle /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },

  // Tools & Methodologies
  { name: "JIRA", icon: <SiJira /> },
  { name: "ALM/QC", icon: <SiJenkins /> },
  { name: "Agile", icon: <SiJira /> },
  { name: "CI/CD", icon: <SiJenkins /> }
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
    AOS.init({
      once: true,
      duration: 700,
      offset: 80,
    });
  }, []);

  return (
    <section id="skills" className="py-16 px-4 md:px-12">
      <h2
        className="text-3xl font-bold mb-8 text-white"
        data-aos="fade-up"
      >
        Skills
      </h2>

      <div data-aos="fade-up">
        <Slider {...sliderSettings}>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex flex-col items-center rounded-xl p-8 shadow-lg">
                <div className="text-6xl mb-4 text-primary-400">
                  {skill.icon}
                </div>

                <span className="text-2xl text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;