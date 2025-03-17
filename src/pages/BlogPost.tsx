import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blog.json';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((post: BlogPost) => post.id === id);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
        <button
            onClick={() => window.history.back()}
            className="text-blue-600 font-medium mt-2 inline-block cursor-pointer"
          >
         ← Back
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <a href="/articles" className="text-blue-600 hover:underline">← Back to blog</a>
      </div>
      <header className="mb-8">
        <time dateTime={post.date} className="text-gray-500 text-sm">
          {post.date}
        </time>
        <h1 className="text-4xl font-bold mt-2">{post.title}</h1>
      </header>
      <div 
        className="prose prose-lg prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-img:rounded-lg prose-img:w-full prose-img:mx-auto prose-img:my-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </article>
  );
};

export default BlogPost;