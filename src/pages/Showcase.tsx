import React from "react";

const projects = [
  {
    title: "Planetaria",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    link: "planetaria.tech",
    icon: "🪐",
  },
  {
    title: "Animaginary",
    description: "High performance web animation library, hand-written in optimized WASM.",
    link: "github.com",
    icon: "📘",
  },
  {
    title: "HelioStream",
    description: "Real-time video streaming library, optimized for interstellar transmission.",
    link: "github.com",
    icon: "🚀",
  },
  {
    title: "cosmOS",
    description: "The operating system that powers our Planetaria space shuttles.",
    link: "github.com",
    icon: "⚫",
  },
  {
    title: "OpenShuttle",
    description: "The schematics for the first rocket I designed that successfully made it to orbit.",
    link: "github.com",
    icon: "🔵",
  },
];

const Showcase = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto text-center mt-12">
        <h1 className="text-3xl font-bold">Things I've made trying to put my dent in the universe.</h1>
        <p className="text-gray-600 mt-4">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className=" p-6 rounded-lg flex items-start space-x-4 hover:bg-white hover:animate-pulse hover:animate-ease-out">
            <div className="text-3xl">{project.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{project.description}</p>
              <a href={`https://${project.link}`} className="text-blue-500 text-sm mt-2 block">{project.link}</a>
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

export default Showcase;
