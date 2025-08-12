import React from 'react';

const PostCard = ({ post, onNavigate }) => (
  <div 
    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
    onClick={() => onNavigate(`/blog/${post.slug}`)}
  >
    {/* This is a placeholder for a blog post image */}
    <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2z" />
      </svg>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-600">{post.category}</span>
        <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-600">{post.date}</span>
      </div>
    </div>
  </div>
);

export default PostCard;