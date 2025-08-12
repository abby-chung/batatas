const BlogSidebar = ({ categories, onFilterChange, currentFilter }) => (
  <aside className="space-y-6">
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-lg text-gray-900 mb-4">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onFilterChange('all')}
            className={`w-full text-left p-2 rounded-lg transition-colors ${
              currentFilter === 'all'
                ? 'bg-gray-200 text-gray-900 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Categories
          </button>
        </li>
        {categories.map(cat => (
          <li key={cat}>
            <button
              onClick={() => onFilterChange(cat)}
              className={`w-full text-left p-2 rounded-lg transition-colors ${
                currentFilter === cat
                  ? 'bg-gray-200 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
    {/* You can add more widgets here, like a recent posts list or an author bio */}
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-lg text-gray-900 mb-4">About the Author</h3>
      <p className="text-sm text-gray-600">
        Brief description about the blog author.
      </p>
    </div>
  </aside>
);

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
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <BlogSidebar categories={categories} onFilterChange={setFilter} currentFilter={filter} />
        </div>
        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <PostCard key={post.id} post={post} onNavigate={onNavigate} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No posts found.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};