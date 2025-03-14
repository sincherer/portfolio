import React from 'react';

const GoKudosCaseStudy = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Back to Projects Link */}
      <div className="mb-8">
        <a href="/projects" className="text-blue-600 font-medium mt-2 inline-block">← Back to projects</a>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">GoKudos SaaS Platform Design & Development</h1>
          <p className="text-xl text-gray-600">A case study on designing and developing a comprehensive SaaS platform</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">UX/UI Design</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">SaaS</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Startup</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Arco Design</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">React</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">WordPress</span>
          </div>
        </div>

        {/* Problem Statement Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              As a new startup, GoKudos needed a fast and scalable SaaS platform to manage multiple business operations while maintaining a user-friendly interface. The challenges included:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Designing a cohesive system for diverse features like CRM, task management, and attendance tracking</li>
              <li>Creating an intuitive dashboard for real-time insights</li>
              <li>Ensuring seamless communication between the design team, engineers, and CEO</li>
              <li>Developing a marketing website to showcase product features</li>
            </ul>
          </div>
        </section>

        {/* Communication Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Research & Design System Selection</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Researched design systems suitable for rapid development</li>
                <li>Selected Arco Design for its scalability and modern UI components</li>
                <li>Analyzed competitor platforms for best practices</li>
                <li>Defined the information architecture and user flows</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Collaboration & Planning</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regular meetings with the CEO to align on priorities</li>
                <li>Close collaboration with engineers for technical feasibility</li>
                <li>Iterative design reviews to refine the UI/UX</li>
                <li>Planned the entire platform structure without a dedicated PM role</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Solution</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">SaaS Platform Features</h3>
              <p className="text-gray-800 mb-4">
                The GoKudos platform was designed to streamline business operations with the following features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>CRM:</strong> Manage customer relationships and interactions</li>
                <li><strong>Task Management:</strong> Assign and track tasks for employees</li>
                <li><strong>Project Management:</strong> Timeline and Gantt chart views, table view</li>
                <li><strong>Attendance Tracking:</strong> Mark employee attendance</li>
                <li><strong>Payment Collection:</strong> Handle payments with dealers and vendors</li>
                <li><strong>Report Generation:</strong> Generate detailed reports for analysis</li>
                <li><strong>Dashboard:</strong> View total, pending, overdue, and completed tasks</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Initial Wireframes</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Wireframe Screenshot]
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Final Design</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  [Final Design Screenshot]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Website Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Marketing Website Development</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              To highlight GoKudos' product features, I developed a marketing website using WordPress. The website includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>A clean and professional design to reflect the brand identity</li>
              <li>Highlight sections for key features like CRM, task management, and reporting</li>
              <li>A contact form for potential clients to reach out</li>
              <li>SEO optimization for better visibility</li>
            </ul>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Efficiency</h3>
              <p className="text-gray-700">
                Streamlined workflows for employees and managers
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">User Satisfaction</h3>
              <p className="text-gray-700">
                Positive feedback from early users on the platform's usability
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Scalability</h3>
              <p className="text-gray-700">
                Ready to accommodate future feature additions and growing user base
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Selecting the right design system accelerates development</li>
              <li>Clear communication is essential when working without a PM</li>
              <li>Iterative testing ensures a user-friendly interface</li>
              <li>A marketing website complements the SaaS platform by attracting potential clients</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GoKudosCaseStudy;