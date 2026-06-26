import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import StellantisLogo from "../assets/stellantis-logo.png";

export default function StellantisDetail() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-br from-indigo-900/90 via-blue-900/90 to-slate-900/95">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl px-8 py-10 border border-violet-700/30">
        
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
            src={StellantisLogo}
            alt="Stellantis Logo"
            className="block w-[180px] h-[96px] object-contain bg-white rounded-[12px] p-3 shadow"
            draggable={false}
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Stellantis Majestic Backend Platform
        </h1>

        {/* Company + IoT Intro */}
        <div className="mb-7">
          <h2 className="text-xl font-bold text-sky-400 mb-2">About Stellantis & Automotive IoT</h2>
          <p className="text-gray-200">
            Stellantis is one of the world’s largest automakers, created from the 2021 merger of FCA and PSA Group, with brands like Jeep, Fiat, Peugeot, Citroën and more. Stellantis is pioneering next-generation <b>IoT (Internet of Things)</b> in vehicles, connecting millions of cars worldwide. Their platforms enable remote operations, real-time vehicle health monitoring, over-the-air updates, and smart digital services—all powered by cloud-native, scalable backend technology.
          </p>
        </div>

        {/* Project Timeline */}
        <div className="mb-3">
          <span className="font-semibold text-lg text-sky-300">Project Timeline:</span>
          <span className="ml-2 text-base text-gray-100">January 2022 – Till Date</span>
        </div>

        {/* Project Overview */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-sky-400 mb-2">Project Overview</h2>
          <p className="text-gray-200 text-base">
            The Stellantis platform is a secure, modern backend that provides real-time IoT connectivity and digital onboarding for millions of Stellantis vehicles. It enables remote diagnostics, secure over-the-air updates, user activation flows, vehicle data pipelines, and robust API management integrated across Stellantis brands.
          </p>
        </div>

        {/* Deliverables */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-purple-300 mb-2">Key Deliverables</h2>
          <ul className="list-disc pl-7 text-lg text-gray-100 space-y-1">
            <li>Upgraded Java/Spring Boot backend modules for reliability, scale, and new IoT features</li>
            <li>Designed & built secure REST APIs with JWT authentication and RBAC</li>
            <li>Integrated vehicle activation flows, user onboarding automation, and OTA update services</li>
            <li>Implemented real-time data ingestion, processing, and analytics pipelines</li>
            <li>Automated CI/CD with Docker, Jenkins, GitHub Actions, and AWS</li>
            <li>Produced documentation, onboarding guides, and architecture diagrams</li>
          </ul>
        </div>

        {/* Roles & Responsibilities */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-sky-300 mb-2">My Roles & Responsibilities</h2>
          <ul className="list-disc pl-7 text-lg text-gray-200 space-y-1">
            <li> backend engineer and QA tester: major upgrades, new feature design, and production rollout, Test cases , execution</li>
            <li>Architected secure authentication, RBAC, and compliant data flows</li>
            <li>Created advanced validation (regex/data checks) for critical IoT data ingestion</li>
            <li>Streamlined deployment with Dockerized microservices and automated AWS/Jenkins pipelines</li>
            <li>Authored onboarding, usage, and API integration documentation</li>
            <li>Worked closely with scrum teams, led technical demos, and supported stakeholder onboarding</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-7">
          <h2 className="text-xl font-bold text-violet-300 mb-2">Tech Stack</h2>
          <p className="text-gray-100">
            Java, Spring Boot, Maven, AWS, Docker, Jenkins, GitHub Actions, MySQL, PostgreSQL, Redis, REST APIs, JWT/OAuth, Linux, CI/CD, Cloud Monitoring
          </p>
        </div>

        {/* Project Impact */}
        <div>
          <h2 className="text-xl font-bold text-cyan-300 mb-2">Project Impact</h2>
          <p className="text-gray-200">
            · Enabled secure onboarding and digital experiences for over 1 million Stellantis vehicles globally<br />
            · Reduced deployment cycles by 40% and improved backend service reliability<br />
            · Supported digital transformation and IoT connectivity across Stellantis brands
          </p>
        </div>
      </div>
    </section>
  );
}
