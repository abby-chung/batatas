import React, { useState, useEffect } from 'react';

// This is a placeholder for the shadcn/ui components.
// In a real project, you would use 'import { Card, CardContent } from "@/components/ui/card"'
// and other components from your library. For this preview, we'll recreate their styling
// with Tailwind CSS.

// Placeholder data for posts
const allPosts = [
  { id: 1, title: "My First Coffee Brewing Journey", excerpt: "Exploring the rich aromas and subtle flavors of single-origin beans...", date: "October 26, 2023", category: "Coffee", slug: "first-coffee-journey" },
  { id: 2, title: "A Review of 'The Midnight Library'", excerpt: "Matt Haig's novel is a beautiful exploration of regret and second chances...", date: "October 25, 2023", category: "Books", slug: "the-midnight-library-review" },
  { id: 3, title: "Getting Started with Vibe Coding", excerpt: "A guide to setting up your environment for coding with a focus on flow and creativity...", date: "October 24, 2023", category: "Coding", slug: "getting-started-vibe-coding" },
  { id: 4, title: "Top 5 Movies of the Last Decade", excerpt: "A look back at some cinematic masterpieces that have defined the 2010s...", date: "October 23, 2023", category: "Movies", slug: "top-5-movies" },
  { id: 5, title: "Reflecting on Personal Growth", excerpt: "Thoughts on journaling and how it has helped me track my progress and mental state...", date: "October 22, 2023", category: "Reflections", slug: "personal-growth-reflection" },
  { id: 6, title: "Mastering the Pour-Over Technique", excerpt: "A detailed breakdown of the steps to achieve a perfect pour-over coffee...", date: "October 21, 2023", category: "Coffee", slug: "mastering-pour-over" },
];

// Helper function to create a placeholder card with rounded corners
const PostCard = ({ post, onNavigate }) => (
  <div 
    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
    onClick={() => onNavigate(`/blog/${post.slug}`)}
  >
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

// Main Navigation Component
const Header = ({ onNavigate }) => (
  <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <div 
        className="text-2xl font-bold text-gray-900 cursor-pointer"
        onClick={() => onNavigate('/')}
      >
        My Personal Blog
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a 
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          Home
        </a>
        <a 
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          onClick={() => onNavigate('/blog')}
        >
          Blog
        </a>
        <a 
          className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          onClick={() => onNavigate('/about')}
        >
          About
        </a>
      </nav>
      {/* Mobile menu button could be added here */}
    </div>
  </header>
);

// Footer Component
const Footer = ({ onNavigate }) => (
  <footer className="w-full border-t border-gray-200 bg-gray-50 py-8">
    <div className="container mx-auto px-4 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a 
          className="hover:underline cursor-pointer"
          onClick={() => onNavigate('/privacy')}
        >
          Privacy Policy
        </a>
        <a 
          className="hover:underline cursor-pointer"
          onClick={() => onNavigate('/terms')}
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

// Home Page Component
const HomePage = ({ onNavigate }) => (
  <main className="container mx-auto px-4 py-8">
    <section className="mb-12">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to my digital journal.</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a space where I share my thoughts on books, movies, and coffee, and document my journey learning new technical skills like "vibe coding".
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-gray-800">Recent Posts</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allPosts.slice(0, 4).map(post => (
          <PostCard key={post.id} post={post} onNavigate={onNavigate} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button 
          className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
          onClick={() => onNavigate('/blog')}
        >
          View all posts
        </button>
      </div>
    </section>
  </main>
);

// Blog Page Component
const BlogPage = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const categories = [...new Set(allPosts.map(post => post.category))];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || post.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">All Posts</h1>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <PostCard key={post.id} post={post} onNavigate={onNavigate} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No posts found.</p>
        )}
      </div>
    </main>
  );
};

// About Page Component
const AboutPage = () => (
  <main className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
    <div className="prose max-w-none prose-gray">
      <p>
        Hello! I'm a coding beginner on a journey to learn and grow. This blog serves as my digital journal and public notebook, a place to document my learning process and share my interests.
      </p>
      <p>
        You'll find content here on a variety of topics, from my love for a good cup of coffee to the books and movies that have inspired me. I'm also documenting my technical skills journey, including my experiments with "vibe coding."
      </p>
      <p>
        Connect with me on social media to follow my journey!
      </p>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-blue-600 hover:underline">Twitter</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">GitHub</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">LinkedIn</a></li>
      </ul>
    </div>
  </main>
);

// Individual Post Component
const Post = ({ slug }) => {
  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">404 - Post Not Found</h1>
        <p className="text-lg text-gray-600">The post you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl max-w-none prose-gray">
        <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mt-2 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>By Author Name</span>
          <span className="mx-2">•</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-xs text-gray-600">{post.category}</span>
        </div>
        <p>
          This is the full content for the post titled <strong>{post.title}</strong>. This section would contain a detailed article, potentially with images, code blocks, and other rich media.
        </p>
        <p>
          Here is some more placeholder text to show what a full article would look like. It's a great place to showcase your detailed thoughts and technical notes.
        </p>
        <h2 className="text-2xl font-bold mt-8">A sub-heading for the article</h2>
        <p>
          This is another paragraph of the post content. The styling for markdown will be automatically handled by the browser. You can use markdown to add lists, bold text, and more.
        </p>
        <ul className="list-disc ml-6">
          <li>A list item</li>
          <li>Another list item</li>
          <li>And one more...</li>
        </ul>
      </article>
      {/* Related posts section could go here */}
    </main>
  );
};


// Main App Component with local navigation logic
export default function App() {
  const [currentPage, setCurrentPage] = useState('/');
  const [currentPostSlug, setCurrentPostSlug] = useState('');

  const handleNavigate = (path) => {
    if (path.startsWith('/blog/')) {
      const slug = path.split('/blog/')[1];
      setCurrentPostSlug(slug);
      setCurrentPage('post');
    } else {
      setCurrentPage(path);
      setCurrentPostSlug('');
    }
  };

  // This useEffect hook is solely responsible for updating the document title
  // based on the current page state, without using the browser's history API.
  useEffect(() => {
    if (currentPage === 'post') {
      const post = allPosts.find(p => p.slug === currentPostSlug);
      document.title = post ? post.title : "Post Not Found";
    } else if (currentPage === '/') {
      document.title = "My Personal Blog | Home";
    } else {
      const pageName = currentPage.substring(1);
      const capitalizedName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
      document.title = `My Personal Blog | ${capitalizedName}`;
    }
  }, [currentPage, currentPostSlug]);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage />;
      case 'post':
        return <Post slug={currentPostSlug} />;
      default:
        return (
          <main className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
            <button
              className="mt-6 inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
              onClick={() => handleNavigate('/')}
            >
              Go to Home
            </button>
          </main>
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-gray-50 text-gray-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .prose h1, .prose h2, .prose h3 { color: #1f2937; }
        .prose { max-width: 80ch; }
      `}</style>
      <Header onNavigate={handleNavigate} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
