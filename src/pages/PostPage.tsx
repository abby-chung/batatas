const PostWithSidebar = ({ slug, onNavigate }) => {
  const post = allPosts.find(p => p.slug === slug);

  if (!post) {
    // ... 404 handling remains the same ...
  }

  const allCategories = [...new Set(allPosts.map(p => p.category))];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="md:col-span-2">
          <div className="w-full h-80 bg-gray-100 mb-8 rounded-lg flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 16m-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="prose prose-xl prose-gray max-w-none">
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
          </div>
        </article>
        <aside className="md:col-span-1 space-y-6 mt-8 md:mt-0">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">About the Author</h3>
            <p className="text-sm text-gray-600">
              Brief description about the blog author.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              {allCategories.map(cat => (
                <li key={cat}>
                  <a
                    onClick={() => onNavigate(`/blog?filter=${cat}`)} // Example of linking to a filtered blog page
                    className="cursor-pointer block p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {allPosts.slice(0, 3).map(p => (
                <li key={p.id}>
                  <a
                    onClick={() => onNavigate(`/blog/${p.slug}`)}
                    className="cursor-pointer block text-sm font-medium text-gray-900 hover:underline"
                  >
                    {p.title}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">{p.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className="mt-12 text-center">
        <button
          className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
          onClick={() => onNavigate('/blog')}
        >
          Back to Blog
        </button>
      </div>
    </main>
  );
};