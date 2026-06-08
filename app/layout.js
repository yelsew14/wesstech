export const metadata = {
  title: 'WessTech – AI & Tech News NZ and Worldwide',
  description: 'Live AI and technology news for New Zealand and the world — pulled from RSS feeds, refreshed every hour. NZ tech, AI, cybersecurity, startups, and tech jobs.',
  keywords: 'AI news New Zealand, NZ tech news, artificial intelligence NZ, cybersecurity NZ, tech startups NZ, tech jobs NZ, CERT NZ',
  openGraph: {
    title: 'WessTech – AI & Tech News',
    description: 'Live NZ and global AI & technology news — updated every hour from real RSS feeds.',
    url: 'https://wesstech.xyz',
    siteName: 'WessTech',
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google AdSense — add your code here after approval */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" /> */}
      </head>
      <body style={{ margin: 0, padding: 0, background: '#060a14' }}>
        {children}
      </body>
    </html>
  )
}
