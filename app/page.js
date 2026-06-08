// app/page.js
// This is a SERVER COMPONENT — runs on Vercel's server, not in the browser
// Fetches RSS feeds server-side, passes articles to the client component
// revalidate: 3600 = Vercel re-fetches feeds every 60 minutes automatically

import { fetchAllFeeds } from '../lib/fetchFeeds'
import WessTech from '../components/WessTech'

// Tell Next.js to revalidate this page every hour
export const revalidate = 3600

export const metadata = {
  title: 'WessTech – AI & Tech News NZ and Worldwide',
  description: 'The latest AI news, New Zealand tech, product launches, startups, cybersecurity, and tech jobs — live RSS feeds updated every hour.',
  keywords: 'AI news New Zealand, NZ tech news, artificial intelligence, cybersecurity NZ, tech startups NZ, tech jobs NZ',
  openGraph: {
    title: 'WessTech – AI & Tech News',
    description: 'NZ and global AI & technology news — live, updated every hour.',
    url: 'https://wesstech.xyz',
    siteName: 'WessTech',
    locale: 'en_NZ',
    type: 'website',
  },
}

export default async function Home() {
  // Fetch all RSS feeds server-side
  let articles = []
  let fetchedAt = new Date().toISOString()
  let feedError = false

  try {
    articles = await fetchAllFeeds()
  } catch (e) {
    console.error('Feed fetch failed:', e)
    feedError = true
  }

  return (
    <WessTech
      articles={articles}
      fetchedAt={fetchedAt}
      feedError={feedError}
    />
  )
}
