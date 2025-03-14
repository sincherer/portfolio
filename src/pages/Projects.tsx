import React, { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Pulsifi SaaS Navigation",
    description: "Role | Senior UI/UX Designer",
    link: "pulsifi-case-1",
    icon: "💻",
    tags: ["UX Design", "SaaS", "AI"],
    tools: ["Figma", "React", "Angular", "Ant-Design", "NG-ZORRO"]
  },
  {
    title: "TogaGo Website Redesign",
    description: "Role | UI/UX Designer",
    link: "togago-case",
    icon: "✈️",
    tags: ["UX Design", "Web App", "Travel"],
    tools: ["Figma", "Sketch"]
  },
  {
    title: "Pulsifi Analytics Integration",
    description: "Role | Senior UI/UX Designer",
    link: "pulsifi-case-2",
    icon: "📊",
    tags: ["Analytics", "SaaS", "AI"],
    tools: ["Google Analytics", "Looker Studio", "GTM"]
  },
  {
    title: "Figma-Google Sheets Automation",
    description: "Role | Senior UI/UX Designer",
    link: "pulsifi-case-3",
    icon: "🔄",
    tags: ["Automation", "Design Ops", "Productivity"],
    tools: ["Figma", "Google Sheets"]
  },
  {
    title: "Knowledge Base Chatbot",
    description: "Role | Creator",
    link: "knowledge-base-case",
    icon: "🤖",
    tags: ["AI", "Chatbot"],
    tools: ["React", "Ant Design X", "Supabase"]
  },
  {
    title: "GoKudos",
    description: "The operating system that powers our Planetaria space shuttles.",
    link: "gokudos-case",
    icon: "📜",
    tags: ["UX Design","SaaS", "Product Planning"],
    tools: ["Figma", "Wordpress", "Powerpoint", "Adobe suits"]
  },
  {
    title: "OpenShuttle",
    description: "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: "github.com",
    icon: "🔵",
    tags: ["Engineering", "Space"],
    tools: ["CAD", "Python", "MATLAB"]
  },
];

const Project = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h1 className="text-3xl font-bold">Things I've made trying to put my dent in the universe.</h1>
        <p className="text-gray-600 mt-4">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-3 py-1 rounded-full text-sm ${!selectedTag ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto animate-fade-up">
        {filteredProjects.map((project, index) => (
          <div key={index} className="p-6 rounded-lg flex items-start space-x-4 animate-fade-up hover:bg-slate-100  hover:shadow-md transition-shadow">
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
                  <span key={tool} className="text-xs px-2 py-1 bg-cyan-50 text-cyan-600 rounded-full">{tool}</span>
                ))}
              </div>
              <Link to={`${project.link}`} className="text-blue-600 font-medium mt-2 inline-block">View project →</Link>
            </div>
          </div>
        ))}
      </div>
      <footer className="text-center text-gray-500 text-sm mt-12">
        <p>© 2025 SinCher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Project;
