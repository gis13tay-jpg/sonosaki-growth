export type Concern = {
  slug: string
  label: string
}

export const CONCERNS: Concern[] = [
  { slug: 'inquiries', label: '問い合わせが増えない' },
  { slug: 'repeat', label: 'リピーターが増えない' },
  { slug: 'hiring-apply', label: '採用の応募が来ない' },
  { slug: 'hiring-retain', label: '採用しても長く続かない' },
  { slug: 'sns', label: 'SNSを頑張っても成果が出ない' },
  { slug: 'unknown', label: '何から始めればいいか分からない' },
]
