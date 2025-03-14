import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blog.json';

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Writing on software design, company building, and the aerospace industry.</h1>
      <p className="text-gray-600 mt-2">All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>
      <div className="mt-8 space-y-6">
        {blogData.map((post) => (
          <div key={post.id} className="border-b pb-4">
            <p className="text-gray-500 text-sm">{post.date}</p>
            <h2 className="text-xl font-semibold mt-1">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
            <Link to={`/articles/${post.id}`} className="text-blue-600 font-medium mt-2 inline-block">Read article →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;