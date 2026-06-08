// lib/fetchFeeds.js
// Runs SERVER-SIDE only — fetches RSS feeds and parses them
// Called from app/page.js with revalidate — refreshes every 60 minutes

export const FEEDS = [
  // NZ Tech
  {
    id: 'nzherald',
    name: 'NZ Herald',
    cat: 'nz',
    tag: 'NZ Tech',
    url: 'https://www.nzherald.co.nz/arc/outboundfeeds/rss/section/business/tech/',
    fallbackUrl: 'https://www.nzherald.co.nz/rss/news/',
  },
  {
    id: 'rnz',
    name: 'RNZ',
    cat: 'nz',
    tag: 'NZ Tech',
    url: 'https://www.rnz.co.nz/rss/business.rss',
    fallbackUrl: 'https://www.rnz.co.nz/rss/news.rss',
  },
  {
    id: 'stuff',
    name: 'Stuff',
    cat: 'nz',
    tag: 'NZ Tech',
    url: 'https://www.stuff.co.nz/rss/technology',
    fallbackUrl: 'https://www.stuff.co.nz/rss/business',
  },
  // AI News
  {
    id: 'techcrunch_ai',
    name: 'TechCrunch',
    cat: 'ai',
    tag: 'AI News',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    fallbackUrl: 'https://techcrunch.com/feed/',
  },
  {
    id: 'theverge',
    name: 'The Verge',
    cat: 'ai',
    tag: 'AI News',
    url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
    fallbackUrl: 'https://www.theverge.com/rss/index.xml',
  },
  {
    id: 'wired',
    name: 'Wired',
    cat: 'ai',
    tag: 'AI News',
    url: 'https://www.wired.com/feed/tag/artificial-intelligence/latest/rss',
    fallbackUrl: 'https://www.wired.com/feed/rss',
  },
  // Products
  {
    id: 'verge_tech',
    name: 'The Verge',
    cat: 'products',
    tag: 'Product Launch',
    url: 'https://www.theverge.com/rss/tech/index.xml',
    fallbackUrl: 'https://www.theverge.com/rss/index.xml',
  },
  {
    id: 'engadget',
    name: 'Engadget',
    cat: 'products',
    tag: 'Product Launch',
    url: 'https://www.engadget.com/rss.xml',
    fallbackUrl: 'https://www.engadget.com/rss.xml',
  },
  // Startups
  {
    id: 'techcrunch_startups',
    name: 'TechCrunch',
    cat: 'startups',
    tag: 'Startups',
    url: 'https://techcrunch.com/category/startups/feed/',
    fallbackUrl: 'https://techcrunch.com/feed/',
  },
  // Cybersecurity
  {
    id: 'cert_nz',
    name: 'CERT NZ',
    cat: 'security',
    tag: 'Cybersecurity',
    url: 'https://www.cert.govt.nz/it-specialists/advisories/rss/',
    fallbackUrl: 'https://www.cert.govt.nz/feed/',
  },
  {
    id: 'zdnet_security',
    name: 'ZDNet',
    cat: 'security',
    tag: 'Cybersecurity',
    url: 'https://www.zdnet.com/topic/security/rss.xml',
    fallbackUrl: 'https://www.zdnet.com/rss.xml',
  },
  // Jobs — no RSS for job boards, use tech news for now
  {
    id: 'computerworld_nz',
    name: 'Computerworld NZ',
    cat: 'jobs',
    tag: 'Tech Jobs NZ',
    url: 'https://www.computerworld.co.nz/feed/',
    fallbackUrl: 'https://www.computerworld.co.nz/feed/',
  },
]

// Parse a single RSS XML string into article objects
function parseRSS(xml, feed) {
  const items = []
  try {
    // Match <item> blocks
    const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || []

    for (const item of itemMatches.slice(0, 6)) {
      const get = (tag) => {
        // Try CDATA first
        const cdata = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, 'i'))
        if (cdata) return cdata[1].trim()
        // Then plain text
        const plain = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
        if (plain) return plain[1].replace(/<[^>]+>/g, '').trim()
        return ''
      }

      const getLink = () => {
        // Try <link> tag (can be tricky with self-closing or namespace)
        const link = item.match(/<link>([^<]+)<\/link>/i)
        if (link) return link[1].trim()
        const linkAlt = item.match(/<link\s+[^>]*href="([^"]+)"/i)
        if (linkAlt) return linkAlt[1].trim()
        return ''
      }

      const getDate = () => {
        const pub = item.match(/<pubDate>([^<]+)<\/pubDate>/i)
        if (pub) return new Date(pub[1].trim())
        const dc = item.match(/<dc:date>([^<]+)<\/dc:date>/i)
        if (dc) return new Date(dc[1].trim())
        return new Date()
      }

      const title = get('title')
      const link  = getLink()
      const desc  = get('description') || get('summary') || get('content:encoded') || ''
      const date  = getDate()

      if (!title || !link) continue

      // Clean HTML from description
      const cleanDesc = desc
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 200)
        + (desc.length > 200 ? '...' : '')

      // Time ago string
      const diffMs  = Date.now() - date.getTime()
      const diffMin = Math.floor(diffMs / 60000)
      const diffHr  = Math.floor(diffMin / 60)
      const diffDay = Math.floor(diffHr / 24)
      const timeAgo = diffMin < 60
        ? `${diffMin}m ago`
        : diffHr < 24
          ? `${diffHr}h ago`
          : `${diffDay}d ago`

      items.push({
        id:      `${feed.id}-${items.length}`,
        cat:     feed.cat,
        tag:     feed.tag,
        title:   title.slice(0, 120),
        summary: cleanDesc || `Read the full article on ${feed.name}.`,
        source:  feed.name,
        url:     link,
        time:    timeAgo,
        date:    date.toISOString(),
        hot:     diffHr < 3, // Mark as hot if less than 3 hours old
      })
    }
  } catch (e) {
    console.error(`Parse error for ${feed.id}:`, e.message)
  }
  return items
}

// Fetch one RSS feed with timeout
async function fetchFeed(feed) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000) // 8 second timeout

  try {
    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'WessTech RSS Reader/1.0 (wesstech.xyz)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    clearTimeout(timeout)

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const xml = await res.text()
    const items = parseRSS(xml, feed)

    if (items.length > 0) return items

    // Try fallback URL if main returned no items
    if (feed.fallbackUrl && feed.fallbackUrl !== feed.url) {
      const res2 = await fetch(feed.fallbackUrl, {
        headers: { 'User-Agent': 'WessTech RSS Reader/1.0 (wesstech.xyz)' },
        next: { revalidate: 3600 }
      })
      if (res2.ok) {
        const xml2 = await res2.text()
        return parseRSS(xml2, feed)
      }
    }

    return []
  } catch (e) {
    clearTimeout(timeout)
    console.error(`Feed failed: ${feed.id} — ${e.message}`)
    return []
  }
}

// Fetch ALL feeds in parallel and return merged, sorted articles
export async function fetchAllFeeds() {
  const results = await Promise.allSettled(
    FEEDS.map(feed => fetchFeed(feed))
  )

  const allArticles = results
    .filter(r => r.status === 'fulfilled')
    .flatMap(r => r.value)
    .filter(a => a.title && a.url)

  // Sort by date — newest first
  allArticles.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Deduplicate by title similarity
  const seen = new Set()
  const deduped = allArticles.filter(a => {
    const key = a.title.toLowerCase().slice(0, 40)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  return deduped
}
