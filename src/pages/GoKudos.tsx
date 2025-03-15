import React from 'react';

const GoKudosCaseStudy = () => {
  return (
    <div className="min-h-screen p-6">
      {/* Back to Projects Link */}
      <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 font-medium mt-2 inline-block cursor-pointer"
          >
         ← Back to projects
        </button>
      
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

        {/* Project Overview Section */}
        <section className="mb-16">
        <div className="grid grid-cols-1 gap-8">
              <div>
                <div className=" rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/PixelBook Go.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
            </div>
        </section>

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

        {/* UI/UX Design Section */}
        <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Sitemap Creation</h2>
        <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/sitemap.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>

        <h2 className="text-2xl font-semibold mb-6">Wireframe Creation</h2>
        <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/gokudos_wireframe.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
        
         <h2 className="text-2xl font-semibold mb-6">Design System Creation</h2>
        <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/Color.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/Fonts.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/Shadows.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>

        <h2 className="text-2xl font-semibold mb-6">Exception Pages</h2>
        <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/exception/401.svg"
                    alt="401"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/exception/404 Page.svg"
                    alt="404"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/exception/504.svg"
                    alt="504"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/exception/505.svg"
                    alt="505"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/exception/Under Maintanence.svg"
                    alt="Under Maintanence"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>

        <h2 className="text-2xl font-semibold mb-6">Module Showcase</h2>
        <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/GanttChart.svg"
                    alt="Before navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/collection.svg"
                    alt="collection"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/customer.svg"
                    alt="customer"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/role-permission.svg"
                    alt="role-permission"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/task-kanban.svg"
                    alt="task-kanban"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
          </div>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/Settings.svg"
                    alt="Settings"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="bg-white rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/gokudos/module/attendance.svg"
                    alt="attendance"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
            </div>
         </div>
        </section>

        
      </div>
    </div>
  );
};

export default GoKudosCaseStudy;