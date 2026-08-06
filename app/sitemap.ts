import type { MetadataRoute } from 'next'
import { COLUMNS, COLUMN_CATEGORIES } from '@/data/columns'
import { CONCERNS } from '@/data/concerns'
import { INDUSTRIES } from '@/data/industries'

const SITE_URL = 'https://www.sonosakigrowth.jp'

function latestPublishedAt(columns: { publishedAt: string }[]): Date {
  if (columns.length === 0) return new Date()
  const latest = columns.reduce((max, c) => (c.publishedAt > max ? c.publishedAt : max), columns[0].publishedAt)
  return new Date(latest)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/customer-acquisition`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPublishedAt(COLUMNS),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const categoryPages: MetadataRoute.Sitemap = COLUMN_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/blog/category/${category.slug}`,
    lastModified: latestPublishedAt(COLUMNS.filter((c) => c.category === category.slug)),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const concernPages: MetadataRoute.Sitemap = CONCERNS.map((concern) => ({
    url: `${SITE_URL}/blog/concern/${concern.slug}`,
    lastModified: latestPublishedAt(COLUMNS.filter((c) => c.concerns.includes(concern.slug))),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${SITE_URL}/blog/industry/${industry.slug}`,
    lastModified: latestPublishedAt(COLUMNS.filter((c) => c.industries.includes(industry.slug))),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const articlePages: MetadataRoute.Sitemap = COLUMNS.map((column) => ({
    url: `${SITE_URL}/blog/${column.slug}`,
    lastModified: new Date(column.updatedAt ?? column.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...concernPages, ...industryPages, ...articlePages]
}
