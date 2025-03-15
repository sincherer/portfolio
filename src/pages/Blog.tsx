import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json';

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold opacity-100 animate-fade-in">
        Writing on software design, company building, and the aerospace industry.
      </h1>
      <p className="text-gray-600 mt-2 opacity-100 animate-fade-in animation-delay-200">
        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
      </p>
      <div className="mt-8 space-y-6">
        {blogData.map((post, index) => (
          <div 
            key={post.id} 
            className="border-b pb-4 opacity-100 animate-fade-in hover:opacity-90"
            style={{ animationDelay: `${(index + 2) * 200}ms`, opacity: 1 }}
          >
            <p className="text-gray-500 text-sm">{post.date}</p>
            <h2 className="text-xl font-semibold mt-1 transition-colors duration-200">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
            <Link to={`/articles/${post.id}`} className="text-blue-600 font-medium mt-2 inline-block transition-all duration-200 hover:translate-x-1">Read article →</Link>
          </div>
        ))}
      </div>
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
  );
};

export default Blog;