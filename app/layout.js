export const metadata = {
  title: "WessTech – AI & Tech News NZ and Worldwide",
  description:
    "The latest AI news, New Zealand tech, product launches, startups, cybersecurity, and tech jobs — curated daily by wesstech.xyz",
  keywords:
    "AI news New Zealand, NZ tech news, artificial intelligence, cybersecurity NZ, tech startups NZ, tech jobs NZ",
  openGraph: {
    title: "WessTech – AI & Tech News",
    description: "NZ and global AI & technology news curated daily.",
    url: "https://wesstech.xyz",
    siteName: "WessTech",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7206717367693847"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#060a14" }}>
        {children}
      </body>
    </html>
  );
}
