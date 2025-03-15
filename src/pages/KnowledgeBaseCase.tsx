import React from 'react';

const KnowledgeBaseCase = () => {
  return (
    <div className="min-h-screen p-6">
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
          <h1 className="text-4xl font-bold mb-4">Knowledge Base Chatbot</h1>
          <p className="text-xl text-gray-600">A case study on building an intelligent self-learning chatbot</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">AI</span>
            <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Chatbot</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">React</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Ant Design X</span>
            <span className="text-sm px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full">Supabase</span>
          </div>
        </div>

        {/* Problem Statement Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Challenge</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 mb-4">
              Building an intelligent chatbot that can effectively:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Match user queries with relevant answers from a knowledge base</li>
              <li>Handle varying levels of query confidence</li>
              <li>Learn and improve from user interactions</li>
              <li>Maintain and expand its knowledge database</li>
            </ul>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Process</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Technical Architecture</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>React frontend with Ant Design X</li>
                <li>Supabase database integration</li>
                <li>AI-powered matching algorithm</li>
                <li>Real-time confidence scoring</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Data Management</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Knowledge base schema design</li>
                <li>Query-answer mapping</li>
                <li>Keyword extraction and matching</li>
                <li>Confidence threshold management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Solution</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Intelligent Matching System</h3>
              <p className="text-gray-800 mb-4">
                A sophisticated chatbot system featuring:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Advanced query matching algorithm</li>
                <li>Multi-factor confidence scoring</li>
                <li>Automated knowledge base expansion</li>
                <li>Interactive learning capabilities</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Query Processing</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img
                    src="../assets/images/knowledgebase.PNG"
                    alt="After navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Knowledge Management</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <img
                    src="../assets/images/database.PNG"
                    alt="After navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div>
                <h3 className="text-lg font-medium mb-3">Demo</h3>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center p-4">
                  <img
                    src="../assets/images/Sloth X.gif"
                    alt="After navigation redesign"
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">The Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Response Accuracy</h3>
              <p className="text-gray-700">
                85% accurate response rate with high confidence matches
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Knowledge Growth</h3>
              <p className="text-gray-700">
                50% increase in knowledge base coverage
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Learning Efficiency</h3>
              <p className="text-gray-700">
                30% improvement in query matching accuracy over time
              </p>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Effective confidence scoring is crucial for response accuracy</li>
              <li>Continuous learning improves chatbot performance</li>
              <li>Structured data management enhances query matching</li>
              <li>User feedback is vital for knowledge base expansion</li>
            </ul>
          </div>
        </section>

        {/* Professional Contact Section */}
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
      </div>
    </div>
  );
};

export default KnowledgeBaseCase;