import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blog.json';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((post) => post.id === id) as BlogPost | undefined;

  if (!post || !post.content) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
        <button
            onClick={() => window.history.back()}
            className="text-blue-600 font-medium mt-2 inline-block cursor-pointer"
          >
         ← Back to articles
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12">
      <div className="mb-8 max-w-4xl mx-auto">
      <button
    onClick={() => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/projects';
      }
    }}
    className="text-blue-600 font-medium mt-2 inline-block cursor-pointer"
  >
    ← Back to articles
  </button>
      </div>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <time dateTime={post.date} className="text-gray-500 text-sm block mb-4">
          {post.date}
        </time>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-700">{post.excerpt}</p>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-700 prose-ul:list-disc prose-ul:list-inside prose-ul:space-y-2 prose-ul:text-gray-700 prose-ul:mt-4 prose-img:rounded-lg prose-img:shadow-md prose-img:mt-4 prose-img:w-full prose-img:h-auto">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
};

export default BlogPost;