const data = [
  {
    title: "Why Modern Websites Need Performance First Design",
    slug: "modern-websites-performance-first-design",
    publishedAt: "2025-01-12",
  },
  {
    title: "10 JavaScript Tricks Every Frontend Developer Should Know",
    slug: "javascript-tricks-for-frontend-developers",
    publishedAt: "2025-02-03",
  },
  {
    title: "How AI Tools Are Changing Web Development in 2025",
    slug: "ai-tools-changing-web-development-2025",
    publishedAt: "2025-02-18",
  },
  {
    title: "Building Scalable Web Apps with Next.js and Appwrite",
    slug: "scalable-web-apps-nextjs-appwrite",
    publishedAt: "2025-03-01",
  },
  {
    title: "CSS Layout Secrets That Make Your UI Feel Premium",
    slug: "css-layout-secrets-premium-ui",
    publishedAt: "2025-03-15",
  },
];

export const getPosts = () => {
  return data.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
};
