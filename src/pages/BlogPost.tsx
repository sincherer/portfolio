import React from 'react';
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

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Blog post not found</h1>
        <a href="/articles" className="text-blue-600 hover:underline mt-4 inline-block">← Back to blog</a>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <a href="/articles" className="text-blue-600 font-medium mt-2 inline-block">← Back to blog</a>
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
    </article>
  );
};

export default BlogPost;