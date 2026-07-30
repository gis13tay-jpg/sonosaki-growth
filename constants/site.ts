export const SITE_CONFIG = {
  name: 'SONOSAKI Growth',
  description:
    'AI検索・Google検索・Instagram・ブログ・LINE・LPを組み合わせた「選ばれる仕組み」を設計・構築します。',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ogImage: '/images/og/default.png',
  twitterHandle: '@sonosakigrowth',
  instagram: 'https://instagram.com/sonosakigrowth',
  twitter: 'https://x.com/sonosakigrowth',
} as const
