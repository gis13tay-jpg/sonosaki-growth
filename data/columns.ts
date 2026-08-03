import { INDUSTRIES } from './industries'
import { CONCERNS } from './concerns'

export type ColumnCategory = {
  slug: string
  label: string
}

export type CategoryGroup = {
  key: string
  label: string
  linkBase: '/blog/category' | '/blog/industry'
  categories: ColumnCategory[]
}

// カテゴリはグループ単位で管理する。グループやカテゴリを増やす場合は
// この配列に追記するだけでよい（一覧ページ・絞り込みページの双方に自動反映される）
export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    key: 'acquisition',
    label: '集客',
    linkBase: '/blog/category',
    categories: [
      { slug: 'google-search', label: 'Google検索対策（SEO）' },
      { slug: 'google-map', label: 'Googleマップ対策（MEO）' },
      { slug: 'ai-search', label: 'AI検索対策' },
      { slug: 'lp-improvement', label: 'LP改善' },
      { slug: 'line', label: 'LINE導線' },
      { slug: 'retention', label: 'リピーター対策' },
    ],
  },
  {
    key: 'hiring',
    label: '採用',
    linkBase: '/blog/category',
    categories: [
      { slug: 'hiring', label: '採用' },
      { slug: 'hiring-retention', label: '定着' },
      { slug: 'hiring-lp', label: '採用LP' },
    ],
  },
  {
    key: 'industry',
    label: '業種別',
    linkBase: '/blog/industry',
    categories: INDUSTRIES,
  },
]

export const COLUMN_CATEGORIES: ColumnCategory[] = CATEGORY_GROUPS.filter(
  (group) => group.linkBase === '/blog/category',
).flatMap((group) => group.categories)

export function categoryLabel(slug: string): string {
  return COLUMN_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug
}

// コラムトップの「カテゴリから探す」表示専用の言い換え。
// ルーティングやデータ上のカテゴリ構造は変えず、表示文言だけをユーザーの悩み表現に寄せる。
// 対応関係のないカテゴリはそのまま categoryLabel() の値が使われる。
const CATEGORY_DISPLAY_OVERRIDES: Record<string, string> = {
  'google-search': 'Google検索で見つからない',
  'google-map': 'Googleマップで見つからない',
  'ai-search': 'AI検索に出てこない',
  'lp-improvement': 'LPから問い合わせが来ない',
}

export function categoryDisplayLabel(slug: string): string {
  return CATEGORY_DISPLAY_OVERRIDES[slug] ?? categoryLabel(slug)
}

export type Column = {
  slug: string
  title: string
  category: string
  concerns: string[]
  industries: string[]
  tags: string[]
  excerpt: string
  // 記事冒頭に表示する「この記事で分かること」の箇条書き。記事ごとに自由に設定できる
  keyTakeaways: string[]
  content: string[]
  publishedAt: string
  // 将来的に実際の閲覧数へ差し替える前提のダミー値
  viewCount: number
}

export const COLUMNS: Column[] = [
  {
    slug: 'inquiries-not-coming',
    title: 'LPから問い合わせが来ない理由と、見直すべき3つのポイント',
    category: 'lp-improvement',
    concerns: ['lp-no-inquiry', 'inquiries'],
    industries: [],
    tags: ['LP', '導線設計'],
    excerpt:
      'LPを作ったのに問い合わせが増えない——多くの場合、原因はデザインではなく「導線」にあります。',
    keyTakeaways: [
      'LPから問い合わせが来ない主な原因は、デザインではなく「導線の断絶」であること',
      '見直すべき3つのポイント（見つけてもらえるか／内容が伝わるか／問い合わせのハードル）',
      '自社の導線をどこから見直せばよいかの最初の一歩',
    ],
    content: [
      '「LPはあるのに問い合わせが来ない」というご相談は非常に多くいただきます。多くの場合、原因はデザインの良し悪しではありません。お客様が「見つけて→理解して→問い合わせる」までの流れのどこかで、途切れてしまっていることがほとんどです。',
      '見直すべきポイントの1つ目は「見つけてもらえているか」です。どれだけ良いLPを作っても、検索やSNSで見つけてもらえなければ意味がありません。2つ目は「内容が伝わっているか」です。誰のための、何のサービスなのかが一目で分からないページは、お客様が離脱する原因になります。3つ目は「問い合わせのハードルが低いか」です。連絡先が分かりにくかったり、次に何をすればいいか書かれていないページは、行動につながりません。',
      'まずは自社の導線を最初から最後まで一度たどってみて、どこで途切れているのかを確認することから始めてみてください。',
    ],
    publishedAt: '2026-05-12',
    viewCount: 842,
  },
  {
    slug: 'ai-search-not-found',
    title: 'ChatGPTで自社が紹介されない…AI検索時代に必要な対策とは',
    category: 'ai-search',
    concerns: ['ai-search-not-found', 'inquiries'],
    industries: [],
    tags: ['AI検索', 'ChatGPT', '構造化データ'],
    excerpt:
      'ChatGPTやGoogleのAI回答で自社の名前が挙がらない場合、Google検索対策（SEO）とは別の視点での対策が必要です。',
    keyTakeaways: [
      'AI検索（ChatGPTなど）とGoogle検索対策（SEO）の違い',
      'AIに情報を読み取ってもらいやすくする発信の仕方',
      'AI検索対策とSEOを両輪で進めるべき理由',
    ],
    content: [
      '最近では「近くのおすすめの美容院を教えて」のように、ChatGPTなどのAIに直接質問して情報を探す人が増えています。これまでのGoogle検索対策（SEO）だけでは、この「AI検索」で紹介される状態を作ることはできません。',
      'AIは、Web上に構造化された分かりやすい情報や、比較・引用されやすい文章をもとに回答を組み立てています。そのため、サービス内容や特徴、よくある質問などを、AIが読み取りやすい形で整理して発信しておくことが重要になります。',
      'Google検索対策（SEO）とAI検索対策は、対立するものではなく両輪です。どちらか一方ではなく、両方の視点を持って情報を発信していくことが、これからの集客には欠かせません。',
    ],
    publishedAt: '2026-05-20',
    viewCount: 1204,
  },
  {
    slug: 'seo-where-to-start',
    title: 'Google検索で見つからない…何から手をつければいいか分からない方へ',
    category: 'google-search',
    concerns: ['google-search-not-found', 'unknown'],
    industries: [],
    tags: ['SEO', '検索対策'],
    excerpt:
      '「検索対策（SEO）が大事なのは分かるけれど、何から始めればいいか分からない」という方向けに、最初の一歩を整理しました。',
    keyTakeaways: [
      '検索対策（SEO）で最初に取り組むべきこと',
      'お客様にもGoogleにも伝わりやすいページの条件',
      '完璧を目指さず少しずつ整える進め方',
    ],
    content: [
      '検索対策（SEO）と聞くと難しく感じる方も多いですが、最初に取り組むべきことはシンプルです。まずは「お客様がどんな言葉で検索して自社にたどり着いてほしいか」を洗い出すことから始めます。',
      '次に、そのページを開いたときに「誰のための、どんなサービスか」が数秒で伝わるようになっているかを確認します。専門用語ばかりのページは、検索エンジンにもお客様にも伝わりにくくなります。',
      '一度にすべてを完璧にする必要はありません。まずは現状のページを見直すところから、少しずつ整えていくことをおすすめします。',
    ],
    publishedAt: '2026-06-02',
    viewCount: 967,
  },
  {
    slug: 'meo-worth-it',
    title: 'Googleマップ対策（MEO）はやるべき？地域集客に効く理由',
    category: 'google-map',
    concerns: ['google-map-not-found', 'inquiries'],
    industries: ['beauty-salon', 'chiropractic', 'restaurant'],
    tags: ['MEO', 'Googleマップ', '地域集客'],
    excerpt:
      '「近くの〇〇」で検索されたときに表示されるGoogleマップは、地域のお客様に見つけてもらうための重要な入口です。',
    keyTakeaways: [
      'Googleマップ対策（MEO）が地域集客に効く理由',
      'まず見直すべき基本の3項目（情報の正確さ／写真・口コミ／強みの伝わりやすさ）',
      'Google検索対策（SEO）とあわせて整えるべき理由',
    ],
    content: [
      '美容サロンや整体院、飲食店など、地域のお客様を対象にする事業者にとって、Googleマップでの見え方は非常に重要です。「近くの整体院」のように検索する人は、来店の意欲が高いことが多く、そのまま問い合わせや来店につながりやすい傾向があります。',
      'Googleマップ対策（MEO）で見直すべき基本は、営業時間や住所などの情報が正確に登録されているか、写真や口コミが充実しているか、そして自社の強みが一目で伝わるかという点です。',
      'すでにGoogle検索対策（SEO）に取り組んでいる場合でも、Googleマップは見落とされがちです。地域のお客様を増やしたい場合は、あわせて整えておくことをおすすめします。',
    ],
    publishedAt: '2026-06-10',
    viewCount: 1530,
  },
  {
    slug: 'instagram-not-enough',
    title: 'Instagramを頑張っているのに成果が出ない、その理由',
    category: 'lp-improvement',
    concerns: ['lp-no-inquiry', 'inquiries'],
    industries: [],
    tags: ['Instagram', 'SNS運用', 'LP'],
    excerpt:
      '毎日投稿しているのに問い合わせにつながらない場合、Instagramの役割を見直す必要があるかもしれません。',
    keyTakeaways: [
      'Instagramを頑張っても成果が出ない、よくある原因',
      'Instagramと問い合わせをつなぐために必要な「もう1つの場所」',
      '「見つけてもらう場所」と「決めてもらう場所」を分けて考える方法',
    ],
    content: [
      'Instagramを頑張って更新しているのに、問い合わせや売上につながらないというお悩みをよく伺います。多くの場合、原因はInstagramの使い方そのものよりも、「Instagramの次にどこへ案内するか」が設計されていないことにあります。',
      'Instagramは、まだ自社を知らない人に興味を持ってもらうための入口としては非常に優れています。しかし、興味を持った人が具体的にサービス内容を理解し、問い合わせを決めるためには、LPなど、じっくり比較・検討できる場所が別に必要です。',
      'Instagramだけで完結させようとせず、「見つけてもらう場所」と「理解して決めてもらう場所」を分けて設計することが、成果につながる第一歩です。',
    ],
    publishedAt: '2026-06-18',
    viewCount: 655,
  },
  {
    slug: 'hiring-not-applying',
    title: '採用サイトはあるのに応募が来ない、よくある3つの原因',
    category: 'hiring',
    concerns: ['hiring-apply'],
    industries: [],
    tags: ['採用', '求人'],
    excerpt:
      '求人媒体に掲載しても応募が集まらない場合、自社の魅力が正しく伝わる導線になっていない可能性があります。',
    keyTakeaways: [
      '採用サイトはあるのに応募が来ない、よくある3つの原因',
      '求職者が検索する言葉と求人情報のズレをなくす方法',
      '応募数の改善につながる自社ポジショニングの整理の仕方',
    ],
    content: [
      '採用においても、集客と同じように「見つけてもらう→理解してもらう→応募してもらう」という導線が必要です。求人媒体に掲載しているのに応募が来ない場合、原因はいくつか考えられます。',
      '1つ目は、求職者が実際に検索する言葉と、求人情報の内容がずれていること。2つ目は、給与や条件だけが並び、働く環境や社風といった「人が惹かれる情報」が伝わっていないこと。3つ目は、応募までのステップが分かりにくく、途中で離脱されてしまっていることです。',
      '採用も集客と同じ「選ばれる仕組み」の一部として捉え、自社のポジショニングを整理することが、応募数の改善につながります。',
    ],
    publishedAt: '2026-06-25',
    viewCount: 733,
  },
]

export function getPopularColumns(limit = 4): Column[] {
  return [...COLUMNS].sort((a, b) => b.viewCount - a.viewCount).slice(0, limit)
}

export function getLatestColumns(limit = COLUMNS.length, excludeSlugs: string[] = []): Column[] {
  return [...COLUMNS]
    .filter((c) => !excludeSlugs.includes(c.slug))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit)
}

export function getRelatedColumns(column: Column, limit = 3): Column[] {
  const scored = COLUMNS.filter((c) => c.slug !== column.slug).map((c) => {
    let score = 0
    if (c.category === column.category) score += 3
    score += c.concerns.filter((v) => column.concerns.includes(v)).length
    score += c.industries.filter((v) => column.industries.includes(v)).length
    score += c.tags.filter((v) => column.tags.includes(v)).length
    return { column: c, score }
  })

  const related = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.column)

  if (related.length > 0) return related

  // 関連度の高い記事が見つからない場合は最新の記事で補う
  return getLatestColumns(limit, [column.slug])
}

// 「この記事を読んだ人はこちらも読んでいます」用のダミーロジック。
// 関連記事（getRelatedColumns）とは狙いを分け、内容の近さではなく閲覧数の高い記事を出す。
// 将来、実際の閲覧ログから算出した共起データに差し替える際は、この関数の中身だけを変更すればよい。
export function getAlsoReadColumns(column: Column, excludeSlugs: string[] = [], limit = 3): Column[] {
  return [...COLUMNS]
    .filter((c) => c.slug !== column.slug && !excludeSlugs.includes(c.slug))
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, limit)
}

function concernLabel(slug: string): string {
  return CONCERNS.find((c) => c.slug === slug)?.label ?? slug
}

function industryLabel(slug: string): string {
  return INDUSTRIES.find((i) => i.slug === slug)?.label ?? slug
}

export function searchColumns(query: string): Column[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  return COLUMNS.filter((column) => {
    const haystack = [
      column.title,
      categoryLabel(column.category),
      ...column.concerns.map(concernLabel),
      ...column.industries.map(industryLabel),
      ...column.tags,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(normalized)
  })
}
