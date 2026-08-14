export const SITE_CONFIG = {
  name: 'SONOSAKI SECOND CAREER',
  nameJa: 'SONOSAKI セカンドキャリア',
  description:
    'AI検索・Google検索・Instagram・ブログ・LINE・LPを組み合わせた「選ばれる仕組み」を設計・構築します。',
  // sitemap.ts / robots.tsと同じ本番ドメインで統一する（環境変数の設定漏れでlocalhostにフォールバックしないようにするため）。
  // apex（sonosakigrowth.jp）はVercel側でwwwへ308リダイレクトされる設定のため、正規URLはwww側に統一する
  url: 'https://www.sonosakigrowth.jp',
  ogImage: '/images/og/default.png',
  twitterHandle: '@sonosakigrowth',
  lineUrl: 'https://lin.ee/Oh9GVkp',
  leadMagnetUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSd7rFCqJ4igVcZHbFrcwQ3jf__XYxQmrqI9Fv-3SFI18Uantg/viewform?usp=publish-editor',
} as const
