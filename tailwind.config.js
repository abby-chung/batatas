/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify all of your content files here, including React components
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Add custom theme properties here if needed
    },
    // Adding the 'prose' plugin for markdown styling
    // In a real project, you would install and use @tailwindcss/typography
    // For this example, we'll just define the container.
    // The user's code already provides custom styling for prose.
    prose: {
      gray: {
        css: {
          '--tw-prose-body': '#4b5563',
          '--tw-prose-headings': '#1f2937',
          '--tw-prose-links': '#2563eb',
          '--tw-prose-bold': '#1f2937',
          '--tw-prose-code': '#1f2937',
          '--tw-prose-quote-borders': '#d1d5db',
        },
      },
    },
  },
  plugins: [],
};
