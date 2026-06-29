export const metadata = {
  title: 'WessTech – Original AI, Networking & Cybersecurity Guides',
  description: 'Original technology guides for AI, networking, cybersecurity, automation, and cloud, supported by curated New Zealand and global technology news.',
  keywords: 'AI guides, network engineering, cybersecurity NZ, technology guides New Zealand, automation, cloud networking, NZ tech news',
  openGraph: {
    title: 'WessTech – Original Technology Guides',
    description: 'Practical AI, networking, cybersecurity, cloud, and automation guides supported by curated technology news.',
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

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#030711" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7206717367693847"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#060a14' }}>
        {children}
      </body>
    </html>
  )
}
