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
  { slug: '1on1-not-working', label: '1on1で本音が聞けない' },
  { slug: 'dx-ai-not-working', label: 'DXやAIを導入しても組織が変わらない' },
  { slug: 'exit-despite-no-problem', label: '面談で「問題ありません」と言われるのに離職される' },
  { slug: 'work-meaning', label: '社員が会社で働く意味を感じられていない' },
  { slug: 'google-map-reviews-few', label: 'Googleマップの口コミが少ない' },
  { slug: 'subordinate-not-growing', label: '部下が育たない' },
  { slug: 'psychological-safety', label: '心理的安全性を高めたい' },
]
