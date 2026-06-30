// app/page.js
// This is a SERVER COMPONENT — runs on Vercel's server, not in the browser
// Fetches curated RSS feeds server-side, passes articles to the client component
// revalidate: 3600 = Vercel re-fetches feeds every 60 minutes automatically

import { fetchAllFeeds } from "../lib/fetchFeeds";
import { getAllArticles } from "../lib/articles";
import WessTech from "../components/WessTech";

// Tell Next.js to revalidate this page every hour
export const revalidate = 3600;

export const metadata = {
  title: "WessTech – Original Technology Guides & Curated Tech News",
  description:
    "Original WessTech guides about AI, networking, cybersecurity, automation, and cloud, supported by curated New Zealand and global technology news.",
  keywords:
    "AI guides New Zealand, network engineering, cybersecurity NZ, automation, cloud networking, NZ tech news",
  openGraph: {
    title: "WessTech – Original Technology Guides",
    description:
      "Practical technology guides supported by curated New Zealand and global technology news.",
    url: "https://wesstech.xyz",
    siteName: "WessTech",
    locale: "en_NZ",
    type: "website",
  },
};

export default async function Home() {
  // Fetch all RSS feeds server-side
  let articles = [];
  const allArticles = getAllArticles();
  const featuredGuide =
    allArticles.find((article) => article.featured) ?? allArticles[0];
  let fetchedAt = new Date().toISOString();
  let feedError = false;

  try {
    articles = await fetchAllFeeds();
  } catch (e) {
    console.error("Feed fetch failed:", e);
    feedError = true;
  }

  return (
    <WessTech
      articles={articles}
      fetchedAt={fetchedAt}
      feedError={feedError}
      featuredGuide={featuredGuide}
      originalGuides={allArticles}
    />
  );
}
