import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// Uncomment if you upload a logo for NEST:
import NestLogo from "../assets/nest-logo.png";

export default function NestDetail() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-br from-emerald-900/90 via-blue-900/90 to-slate-900/95">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl px-8 py-10 border border-green-700/30">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sky-400 mb-4 hover:underline"
        >
          <FaArrowLeft /> Back to Projects
        </button>

        {/* Logo and Title */}
        <div className="flex justify-center mb-7">
          <img
            src={NestLogo}
            alt="NEST Logo"
            className="block w-[140px] h-[70px] object-contain bg-white rounded-[12px] p-3 shadow"
            draggable={false}
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          NEST API Integration Platform — QA/Testing Case Study
        </h1>

        {/* About NEST */}
        <div className="mb-7">
          <h2 className="text-xl font-bold text-emerald-300 mb-2">About NEST</h2>
          <p className="text-gray-200">
            NEST is a robust microservices platform built for modern API integrations at scale. It connects and secures data exchanges between enterprises and third-party partners, with advanced automation and monitoring for every data flow.
          </p>
        </div>

        {/* Project Timeline */}
        <div className="mb-3">
          <span className="font-semibold text-lg text-teal-300">Project Timeline:</span>
          <span className="ml-2 text-base text-gray-100">June 2021 – March 2022</span>
        </div>

        {/* Project Overview */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">Project Overview</h2>
          <p className="text-gray-200 text-base">
            The NEST platform delivers secure, scalable, and reliable integration between client systems and external API services. Reliable API integration was mission-critical—requiring impeccable test coverage, release discipline, and cross-team communication.
          </p>
        </div>

        {/* Key Deliverables */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-purple-300 mb-2">Key Deliverables</h2>
          <ul className="list-disc pl-7 text-lg text-gray-100 space-y-1">
            <li>Developed robust test plans and maintained comprehensive test cases for all API endpoints and integration paths</li>
            <li>Executed manual and automated testing for release sprints and hotfixes</li>
            <li>Tracked, reproduced, and documented bugs and edge cases, collaborating for rapid developer fixes</li>
            <li>Maintained regression and end-to-end suites—ensuring no breakage in multi-service integrations</li>
            <li>Helped write onboarding/testing documentation to reduce ramp-up time for new QA/dev hires</li>
          </ul>
        </div>

        {/* Roles & Responsibilities */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-sky-300 mb-2">My Roles & Responsibilities</h2>
          <ul className="list-disc pl-7 text-lg text-gray-200 space-y-1">
            <li>QA/test engineer for backend and integration flows</li>
            <li>Authoring, updating, and executing manual test cases and scenarios</li>
            <li>Wrote and maintained Postman/REST Assured automated tests as part of CI/CD</li>
            <li>Validated authentication, error handling, and data validation logic</li>
            <li>Actively involved in sprint planning and retrospective meetings</li>
            <li>Partnered with backend and DevOps teams for fast, stable releases</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-7">
          <h2 className="text-xl font-bold text-violet-300 mb-2">Tech & Tools Used</h2>
          <p className="text-gray-100">
            Postman, REST Assured, Jenkins (CI/CD), Jira, GitHub, MySQL/PostgreSQL, Docker, Confluence, Agile/Scrum
          </p>
        </div>

        {/* Project Impact */}
        <div>
          <h2 className="text-xl font-bold text-cyan-300 mb-2">Project Impact</h2>
          <p className="text-gray-200">
            · Improved platform reliability by catching integration bugs before release<br />
            · Helped reduce critical production issues and shorten QA cycles by 30%<br />
            · Contributed to documentation, developer onboarding, and overall product stability
          </p>
        </div>
      </div>
    </section>
  );
}
