export const SITE_CONFIG = {
  name: 'SONOSAKI Growth',
  description:
    'AI検索・Google検索・Instagram・ブログ・LINE・LPを組み合わせた「選ばれる仕組み」を設計・構築します。',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ogImage: '/images/og/default.png',
  twitterHandle: '@sonosakigrowth',
  lineUrl: 'https://lin.ee/Oh9GVkp',
  leadMagnetUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSd7rFCqJ4igVcZHbFrcwQ3jf__XYxQmrqI9Fv-3SFI18Uantg/viewform?usp=publish-editor',
} as const
