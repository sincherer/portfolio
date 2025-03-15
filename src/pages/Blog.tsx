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
    </div>
  );
};

export default Blog;