export type Concern = {
  slug: string
  label: string
}

export const CONCERNS: Concern[] = [
  { slug: 'inquiries', label: '問い合わせが増えない' },
  { slug: 'repeat', label: 'リピーターが増えない' },
  { slug: 'hiring-apply', label: '採用の応募が来ない' },
  { slug: 'hiring-retain', label: '採用しても長く続かない' },
  { slug: 'google-search-not-found', label: 'Google検索で見つからない' },
  { slug: 'google-map-not-found', label: 'Googleマップで見つからない' },
  { slug: 'ai-search-not-found', label: 'AI検索に出てこない' },
  { slug: 'lp-no-inquiry', label: 'LPから問い合わせが来ない' },
  { slug: 'unknown', label: '何から始めればいいか分からない' },
]
