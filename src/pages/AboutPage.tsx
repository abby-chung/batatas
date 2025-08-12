import React from 'react';

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

export default AboutPage;