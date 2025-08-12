import React from 'react';
import PostCard from '../components/PostCard'; // Import PostCard component
import { allPosts } from '../data/posts'; // Assuming you create a new file for the data

const HomePage = ({ onNavigate }) => (
  <main className="container mx-auto px-4 py-16">
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Name of the Site</h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Your site's short description or tagline goes here.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Recent Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allPosts.slice(0, 4).map(post => (
          <PostCard key={post.id} post={post} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  </main>
);

export default HomePage;