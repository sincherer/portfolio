import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export const projects = [
  {
    title: "Pulsifi SaaS Navigation",
    description: "Role | Senior UI/UX Designer",
    link: "pulsifi-case-1",
    icon: "💻 ",
    tags: ["Pulsifi", "SaaS", "AI"],
    tools: ["Figma", "React", "TailwindCSS"]
  },
  {
    title: "Pulsifi Analytics Integration",
    description: "Role | Senior UI/UX Designer",
    link: "pulsifi-case-2",
    icon: "📊",
    tags: ["Pulsifi","Analytics", "SaaS", "Data"],
    tools: ["Google Analytics", "Looker Studio", "GTM", "Visualization"]
  },
  {
    title: "Figma Automation Integration",
    description: "Role | Senior UI/UX Designer",
    link: "pulsifi-case-3",
    icon: "⚡",
    tags: ["Automation", "Pulsifi", "AI"],
    tools: ["Figma", "Google Sheet"]
  },
  {
    title: "Knowledge Base Chat bot",
    description: "Role | Creator",
    link: "knowledge-base-case",
    icon: "💬",
    tags: ["AI", "Database", "Chatbot"],
    tools: ["React", "Ant Design X", "Supabase"]
  },
  {
    title: "TogaGo",
    description: "Role | UIUX Designer",
    link: "togago-case",
    icon: "🛫",
    tags: ["TOGL", "Web App", "Mobile App"],
    tools: ["Figma", "Sketch"]
  },
  {
    title: "GoKudos SaaS Platform Design & Development",
    description: "A case study on designing and developing a comprehensive SaaS platform",
    link: "GoKudos-case",
    icon: "👔",
    tags: ["GoKudos", "SaaS", "Product Planning"],
    tools: ["Figma", "Wordpress", "Powerpoint", "Adobe Suits"]
  },

];

const Project = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Things I've made trying to put my dent in the universe.";
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h1 className="text-3xl font-bold">{displayText}</h1>
        <p className="text-gray-600 mt-4">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-3 py-1 rounded-full text-sm ${!selectedTag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-1 gap-6 mt-10 max-w-4xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg flex items-start space-x-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${index * 0.15}s forwards`
            }}
          >
            <div className="text-3xl">{project.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map(tool => (
                  <span key={tool} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">{tool}</span>
                ))}
              </div>
              <Link to={`${project.link}`} className="text-blue-600 font-medium mt-2 inline-block hover:text-blue-800 transition-colors">View project →</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Contact Section */}
      <div className="max-w-3xl mx-auto text-center mt-12"></div>
      <div className="p-6 border rounded-lg bg-gray-50 hover:bg-white transition-colors duration-300">
        <h3 className="text-lg font-bold">Let's Connect!</h3>
        <p className="text-gray-600">Looking for a passionate UI/UX designer to join your team?</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a
            href="./assets/images/ErSinCher Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          <a
            href="mailto:sincher.er@gmail.com"
            className="flex-1 border border-gray-900 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 text-center flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
        </div>
      </div>

      {/* Footer */}
      <div >
      <footer className="text-center text-gray-500 text-sm mt-12">
        <p>© 2025 SinCher. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default Project;