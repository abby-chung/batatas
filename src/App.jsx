import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { posts } from "./postsData";
import "./index.css";

function Home() {
  return (
    <div className="p-4">
      <h1>Welcome to the world of batatas</h1>
      <p>A personal journal on coffee, books, movies, and tech learning.</p>
      <h2>Recent Posts</h2>
      <ul>
        {posts.slice(0, 4).map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link> - {post.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Blog() {
  return (
    <div className="p-4">
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <h1>Post Not Found</h1>;

  return (
    <div className="p-4">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}

function About() {
  return (
    <div className="p-4">
      <h1>About Me</h1>
      <p>Still figuring out what I should do next.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="p-4">
      <h1>404 - Page Not Found</h1>
      <Link to="/batatas">Go back to Home</Link>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto">
      <header>
        <nav>
          <Link to="/batatas">Home</Link> | <Link to="/blog">Blog</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Batatas</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/batatas" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
