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
    key: 'organization',
    label: '組織',
    linkBase: '/blog/category',
    categories: [{ slug: 'organization', label: '組織・コミュニケーション' }],
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
  organization: '組織づくりに悩んでいる',
}

export function categoryDisplayLabel(slug: string): string {
  return CATEGORY_DISPLAY_OVERRIDES[slug] ?? categoryLabel(slug)
}

// 見出し付きセクション（contentSections）1つ分。paragraphsとlistは両方指定してもよい
export type ColumnSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
  ordered?: boolean
}

export type ColumnFAQ = {
  question: string
  answer: string
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

  // 以下はオプション項目。未設定の場合は既存の表示（contentのみ）を維持する
  description?: string // meta description（未設定時はexcerptを使用）
  primaryKeyword?: string
  relatedKeywords?: string[]
  updatedAt?: string
  // 検索者の質問に対する結論を、見出し直下で簡潔に示すAEO向けの一文
  leadAnswer?: string
  // 見出し付きの本文セクション。指定時はcontentより優先して表示される
  contentSections?: ColumnSection[]
  faq?: ColumnFAQ[]
  ctaHref?: string
  ctaLabel?: string
  ctaDescription?: string
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
  {
    slug: '1on1-honest-talk',
    title: '1on1で本音が聞けない理由｜質問を変える前に見直すべきこと',
    category: 'organization',
    concerns: ['1on1-not-working'],
    industries: [],
    tags: ['1on1', '部下面談', '組織コミュニケーション'],
    primaryKeyword: '1on1 本音 聞けない',
    relatedKeywords: ['1on1 効果ない', '1on1 質問', '部下 本音を言わない'],
    description:
      '1on1をしても部下が本音を話してくれない原因は、質問の仕方ではなく「言葉の向こう側」を理解する土台にあります。SONOSAKI Growthが考える、本音を話せる関係のつくり方を解説します。',
    excerpt:
      '1on1をしても「大丈夫です」「特にありません」で終わってしまう。その原因は質問の技術ではなく、安心して話せる関係の土台にあるかもしれません。',
    leadAnswer:
      '1on1で本音が聞けないのは、質問の技術が足りないからとは限りません。多くの場合、部下が「話しても状況が変わらない」「評価に影響するかもしれない」と感じ、安全に話せる関係ができていないことが原因です。質問を変える前に、まず相手の言葉の向こう側を理解する土台を見直す必要があります。',
    keyTakeaways: [
      '1on1で本音が聞けない本質的な原因',
      '「大丈夫です」「特にありません」の裏にある心理',
      '言葉の選び方から本音に近づくための視点',
      '明日の1on1から使える具体的な行動',
    ],
    content: [],
    contentSections: [
      {
        heading: '想定される状況',
        paragraphs: [
          '月1回、あるいは隔週で1on1を実施している。しかし部下からは「特にありません」「大丈夫です」といった短い返答が続き、話が深まらない。時間だけが過ぎ、形式的な面談になっている。',
        ],
      },
      {
        heading: '表面的な原因',
        list: [
          '質問がクローズドクエスチョンに偏っている',
          '1on1の時間が短く、雑談だけで終わってしまう',
          '上司が話す時間の方が長くなっている',
        ],
        paragraphs: [
          'こうした点の見直しはもちろん有効です。質問の仕方や時間配分を変えることで、会話の量は増えるかもしれません。しかし、それだけでは「本音」までは届かないことがあります。',
        ],
      },
      {
        heading: '本質的な原因',
        paragraphs: [
          '本音が話せない本質的な原因は、部下が「この場で話しても状況が変わらない」「評価や関係性に影響するかもしれない」と感じていることにあります。',
          '人は、安全だと感じられない場では言葉を選びます。遠慮や立場、過去に本音を話して苦い経験をしたことなどが、言葉の選び方に表れます。',
          'つまり1on1で本音が聞けないのは、質問の技術の前に「安心して話せる関係」という土台ができていないことが原因である可能性が高いのです。',
        ],
      },
      {
        heading: '具体的な会話例',
        paragraphs: ['次のようなやり取りに、心当たりはないでしょうか。'],
        list: [
          '上司「最近どう？なにか困っていることある？」',
          '部下「いえ、特にありません」',
          '上司「そう、じゃあ何かあったら言ってね」',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'この会話だけを見ると、特に問題はないように見えます。しかし「特に」という言葉には注目が必要です。「特に（大きな問題は）ありません」であって、「何もない」とは言っていません。小さな違和感や迷いがあっても、それを1on1という場で話す価値をまだ感じていない可能性があります。',
        ],
      },
      {
        heading: '見逃しやすい言葉',
        paragraphs: ['1on1の会話では、次のような言葉にも注目してください。'],
        list: [
          '「特に」「一応」「今のところ」など、断定を避ける言葉',
          '「〜だけなんですけど」「〜しかないんですけど」と、話を小さく見せる前置き',
          '同じ話題を何度も持ち出す、あるいは逆に急に話題を変える',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'これらの言葉は、話す価値がないから省略されているのではなく、話してよいかどうかを本人がまだ判断している途中である場合があります。言葉を訂正したり深追いしたりせず、「今、〇〇と言っていたけど、もう少し聞かせてもらえる？」と、言葉そのものに関心を向けることが糸口になります。',
        ],
      },
      {
        heading: '管理職が確認するポイント',
        list: [
          '直近の1on1で、部下より自分の方が長く話していなかったか',
          '「大丈夫です」で終わった話題を、そのままにしていないか',
          '評価面談と1on1が、部下の中で同じものとして扱われていないか',
          '部下の言葉を、自分の解釈で先に言い換えていないか',
        ],
      },
      {
        heading: '明日からできる行動',
        list: [
          '1on1の冒頭で、評価には関係のない時間であることを伝える',
          '部下が使った言葉をそのまま繰り返し、解釈を挟まずに聞き返す',
          '「特に」「一応」などの言葉が出たら、その先を一呼吸置いて待つ',
          '1回で本音が聞けなくても、同じ話題を次回も自然に扱う',
        ],
      },
      {
        heading: 'まとめ',
        paragraphs: [
          '1on1で本音が聞けない原因は、質問のテクニック以前に、部下が安心して話せる関係ができているかどうかにあります。1on1という仕組みは話す機会をつくれますが、相手がなぜその言葉を選び、なぜそう感じているのかを理解するのは、人と人との関わりです。',
          'SONOSAKI Growthでは、社員一人ひとりの特性や価値観、言葉の背景を理解することから、採用・定着・組織づくりを支援しています。',
        ],
      },
    ],
    faq: [
      {
        question: '1on1の頻度を増やせば本音を話してもらえますか？',
        answer:
          '頻度を増やすだけでは、本音が話しやすくなるとは限りません。話す機会が増えることと、安心して話せる関係ができることは別です。まずは1回1回の対話の質を見直すことを優先してください。',
      },
      {
        question: '「大丈夫です」と言われたら、それ以上聞かない方がいいですか？',
        answer:
          'その場で無理に深掘りする必要はありません。ただし、同じ話題が次回以降も出てくる場合は、本人の中で気になっていることがある可能性があります。時間をかけて扱うという姿勢が大切です。',
      },
      {
        question: '1on1シートやテンプレートを使うのは効果がありますか？',
        answer:
          '話す内容を整理するうえで役立ちます。ただし、テンプレートを埋めることが目的化すると、本人の言葉ではなく型に沿った回答になりやすいため、使い方には注意が必要です。',
      },
    ],
    ctaHref: '/#diagnosis',
    ctaLabel: '6問の組織診断を受けてみる',
    ctaDescription: 'まずは自社の採用・定着・組織づくりの状況を、6つの質問で整理してみませんか。',
    publishedAt: '2026-08-06',
    updatedAt: '2026-08-06',
    viewCount: 0,
  },
  {
    slug: 'dx-ai-org-not-changing',
    title: 'DXやAIを導入しても組織が変わらない理由｜ツールの前に必要な「人を理解する」視点',
    category: 'organization',
    concerns: ['dx-ai-not-working'],
    industries: [],
    tags: ['DX', 'AI活用', '組織文化'],
    primaryKeyword: 'DX 組織 変わらない',
    relatedKeywords: ['AI導入 組織文化', 'DX 定着しない', '組織開発 AI'],
    description:
      'DXやAIを導入しても組織が変わらないのは、ツールに問題があるからではありません。人を理解する土台がなければ十分に活かしきれない、というSONOSAKI Growthの考え方を解説します。',
    excerpt:
      'ツールを入れたのに現場は変わらない。その原因は、DXやAIが担える範囲と、人にしか担えない範囲を分けて考えられていないことにあるかもしれません。',
    leadAnswer:
      'DXやAIを導入しても組織が変わらないのは、ツール自体に問題があるからではありません。多くの場合、情報の整理や業務効率化は進んでも、社員がなぜその行動を取るのか、何を大切にしているのかを理解する土台がないまま導入されているためです。DXやAIは、人を理解する土台と組み合わせて初めて活きてきます。',
    keyTakeaways: [
      'DXやAIを導入しても組織が変わらない本質的な原因',
      'DX・AIが担える範囲と、人にしか担えない範囲の違い',
      '「導入しても意味がない」で終わらせないための視点',
      '明日から見直せる具体的な行動',
    ],
    content: [],
    contentSections: [
      {
        heading: '想定される状況',
        paragraphs: [
          '業務システムを刷新した。チャットツールやAIアシスタントを導入した。情報共有は早くなったはずなのに、社員の主体性や部署間の連携はこれまでとあまり変わらない。むしろ「導入したのに変わらない」という声が現場から聞こえてくる。',
        ],
      },
      {
        heading: '表面的な原因',
        list: [
          '新しいツールの操作に慣れておらず、活用しきれていない',
          '導入の目的が現場に十分共有されていない',
          '一部の部署だけで使われ、全社に広がっていない',
        ],
        paragraphs: [
          'これらは事実として起きていることが多く、研修や説明会を増やすことで一定の改善は見込めます。しかし、それだけでは「組織が変わった」という実感にはつながりにくいのが実情です。',
        ],
      },
      {
        heading: '本質的な原因',
        paragraphs: [
          'DXやAIが担えるのは、情報の整理、記録、処理、分析といった領域です。これらは業務の効率化に大きく貢献します。',
          '一方で、社員がなぜその言葉を選ぶのか、なぜそのように行動するのか、何を大切にして働いているのかを理解することは、ツールの役割の外にあります。',
          '組織が変わらないと感じるとき、多くの場合、業務プロセスは効率化されても、一人ひとりの特性や価値観を理解し、それを役割や関わり方に反映する土台がそのままになっています。ツールが担う範囲と、人にしか担えない範囲を分けて考える必要があります。',
        ],
      },
      {
        heading: '具体的な会話例',
        paragraphs: ['ある現場でよく聞かれる会話です。'],
        list: [
          '経営層「ツールを入れたのに、なぜ現場は変わらないんだろう」',
          '現場担当者「便利にはなったんですけど、正直、何のために使っているのか分からないところもあって……」',
        ],
      },
      {
        heading: '',
        paragraphs: [
          '「便利にはなった」と「何のために使っているか分からない」が同じ文の中に並んでいることに注目してください。ツールへの評価と、その先にある意味づけは別のところにあります。効率化の実感はあっても、自分の仕事や役割とどうつながっているかが見えていない状態です。',
        ],
      },
      {
        heading: '見逃しやすい言葉',
        list: [
          '「便利にはなったんですけど」の「〜けど」の後に続く本音',
          '「一応使っています」という、義務感だけで使われている状態を示す言葉',
          '「上が決めたので」という、自分ごと化されていない前提',
        ],
        paragraphs: [
          'これらの言葉が出るとき、社員はツールそのものよりも、その先にある「なぜ」を求めていることがあります。',
        ],
      },
      {
        heading: '管理職が確認するポイント',
        list: [
          'ツールの活用状況だけでなく、社員がその目的を自分の言葉で説明できるか',
          '導入の目的を、社員の役割や成長とつなげて説明できているか',
          '「効率化」と「組織が変わること」を同じものとして扱っていないか',
        ],
      },
      {
        heading: '明日からできる行動',
        list: [
          'ツールの使い方ではなく「何のために使うのか」を対話する時間をつくる',
          'ツールで浮いた時間を、どのような対話や関わりに使いたいかを社員と一緒に考える',
          '導入の目的を、経営の言葉ではなく現場の役割に翻訳して伝える',
        ],
      },
      {
        heading: 'まとめ',
        paragraphs: [
          'DXやAIの導入自体は、否定されるべきものではありません。情報の整理や業務の効率化には確かな効果があります。ただし、仕組みやツールを導入するだけでは、社員一人ひとりの特性、価値観、行動の前提までは理解できません。',
          '「導入しても意味がない」のではなく、「人を理解する土台がなければ、十分に活かしきれない」というのがSONOSAKI Growthの考え方です。',
          'SONOSAKI Growthでは、社員の特性・価値観・望む未来を理解し、DXやAIの導入と組み合わせながら、採用・定着・組織づくりを支援しています。',
        ],
      },
    ],
    faq: [
      {
        question: 'DXやAIの導入自体が組織にとってマイナスなのでしょうか？',
        answer:
          'いいえ、否定するものではありません。情報整理や業務効率化には大きな効果があります。ただし、それだけで組織文化や社員の主体性が変わるとは限らない、という点に注意が必要です。',
      },
      {
        question: 'ツールの活用率を上げれば組織は変わりますか？',
        answer:
          '活用率の向上は重要な指標ですが、それだけでは不十分な場合があります。社員がツールの先にある目的を自分ごととして理解しているかどうかが、あわせて重要です。',
      },
      {
        question: 'DXと組織づくりは、どちらを先に進めるべきですか？',
        answer:
          'どちらか一方を優先するのではなく、並行して進めることをおすすめします。ツールの導入とあわせて、社員の特性や価値観を理解する取り組みを進めることで、導入の効果を活かしやすくなります。',
      },
    ],
    ctaHref: '/#diagnosis',
    ctaLabel: '6問の組織診断を受けてみる',
    ctaDescription: 'まずは自社の組織づくりの状況を、6つの質問で整理してみませんか。',
    publishedAt: '2026-08-06',
    updatedAt: '2026-08-06',
    viewCount: 0,
  },
  {
    slug: 'line-repeat-customer',
    title: 'リピーターが増えないのはなぜ？問い合わせ後の関係づくりに使えるLINE活用の第一歩',
    category: 'line',
    concerns: ['repeat'],
    industries: [],
    tags: ['LINE', 'リピーター対策', '顧客フォロー'],
    primaryKeyword: 'リピーター 増えない',
    relatedKeywords: ['LINE 顧客フォロー', 'リピーター 施策', '再来店 促進'],
    description:
      'リピーターが増えない主な原因は、サービスの質ではなく、来店・問い合わせ後に接点を維持する仕組みがないことです。LINEを使った関係継続の考え方を解説します。',
    excerpt:
      '一度は満足してもらえているはずなのに、再来店・再依頼につながらない。原因は接客ではなく、関係を続ける仕組みがないことかもしれません。',
    leadAnswer:
      'リピーターが増えない主な原因は、サービスの質ではなく、問い合わせや来店のあとに接点を維持する仕組みがないことです。LINEを使えば、来店後も自然な形でつながりを持ち続け、再来店や再依頼のきっかけをつくれます。',
    keyTakeaways: [
      'リピーターが増えない本質的な原因',
      '「一度きりの関係」で終わってしまう理由',
      'LINEを使った関係継続の考え方',
      '明日から始められる具体的な行動',
    ],
    content: [],
    contentSections: [
      {
        heading: '想定される状況',
        paragraphs: [
          '新規の問い合わせや来店はある。サービスにも一定の満足を感じてもらえている様子はある。しかし、その後の再来店や再依頼にはつながらず、毎回新規のお客様を探し続けなければならない状態が続いている。',
        ],
      },
      {
        heading: '表面的な原因',
        list: [
          '接客や施術の質に問題がある',
          '価格が競合と比べて高い、あるいは安すぎて不安を感じさせている',
          'リピート施策（クーポンや割引）を用意していない',
        ],
        paragraphs: [
          'これらが原因になっているケースも確かにあります。しかし、サービスに満足していても再来店につながらない場合、別の原因が隠れていることがあります。',
        ],
      },
      {
        heading: '本質的な原因',
        paragraphs: [
          'リピーターが増えない本質的な原因は、多くの場合「関係が一度きりで途切れている」ことにあります。',
          'お客様は、来店・問い合わせの時点では前向きな気持ちを持っていても、日常に戻ると次第にその記憶は薄れていきます。次に同じ悩みが出てきたときに思い出してもらえるかどうかは、偶然に任されている状態です。',
          'つまり、接点を「その場限り」にせず、思い出してもらえる形で維持できているかどうかが、リピート率を左右します。',
        ],
      },
      {
        heading: '具体的な会話例',
        paragraphs: ['経営者へのヒアリングで、次のような声をよく聞きます。'],
        list: [
          '「一度来てくださった方は、みなさん満足して帰られるんです。ただ、また来てくれるかというと……」',
          '「連絡先は聞いているんですが、そのあと特に何もしていなくて」',
        ],
      },
      {
        heading: '',
        paragraphs: [
          '「満足して帰られる」ことと「また来てくれる」ことの間には、実は接点がありません。満足度が高くても、思い出すきっかけがなければ、次の来店にはつながらないのです。',
        ],
      },
      {
        heading: '見逃しやすい言葉',
        list: [
          '「連絡先は聞いているんですが」の「〜が」に続く現状',
          '「そのうち施策を考えないと」という、後回しにされがちな課題',
          '「一応LINEはあるんですが」という、活用しきれていない状態',
        ],
        paragraphs: [
          'これらの言葉が出るとき、多くの場合、接点をつくる仕組み自体はすでに存在しています。足りないのは、それを「関係を続ける仕組み」として運用する視点です。',
        ],
      },
      {
        heading: '管理職が確認するポイント',
        list: [
          '来店・問い合わせ後に、お客様と接点を持つ仕組みがあるか',
          'LINEやメールなどの連絡先を、その場限りで終わらせていないか',
          '再来店を促す連絡が、売り込みだけになっていないか',
        ],
      },
      {
        heading: '明日からできる行動',
        list: [
          '来店・問い合わせ後の最初の連絡を、お礼や気遣いのメッセージから始める',
          'LINE公式アカウントを、キャンペーン告知だけでなく日常的な接点として使う',
          '「次に来店するタイミング」を意識した、季節や周期に合わせた一言を送る',
        ],
      },
      {
        heading: 'まとめ',
        paragraphs: [
          'リピーターが増えない原因は、サービスの質だけでなく、問い合わせ・来店後に関係を継続する仕組みがあるかどうかに大きく左右されます。LINEは、お客様の日常に負担をかけずに接点を保てる手段のひとつです。',
          'SONOSAKI Growthでは、Google検索・Googleマップ・AI検索・LINEなどを組み合わせ、見つけてもらうことから関係を続けることまでを一体で設計する集客導線づくりを支援しています。',
        ],
      },
    ],
    faq: [
      {
        question: 'LINE公式アカウントは無料でも効果がありますか？',
        answer:
          '無料プランでも、来店・問い合わせ後のお礼や情報発信など、関係を継続する用途には活用できます。配信数が多くなる場合は有料プランの検討が必要になることがあります。',
      },
      {
        question: '配信の頻度はどのくらいが適切ですか？',
        answer:
          '業種やお客様との関係性によって異なります。頻度よりも、売り込みだけに偏らず、お客様にとって役立つ情報や気遣いが伝わる内容になっているかを優先して考えることをおすすめします。',
      },
      {
        question: 'LINE以外の手段でも同じ効果が期待できますか？',
        answer:
          'メールや会員アプリなど、他の手段でも接点を継続することは可能です。重要なのは手段そのものより、来店後の関係を「その場限り」にしない仕組みがあるかどうかです。',
      },
    ],
    ctaHref: '/customer-acquisition',
    ctaLabel: '集客支援の詳細を見る',
    ctaDescription: 'Google検索・Googleマップ・AI検索・LINEを組み合わせた集客導線づくりをご相談ください。',
    publishedAt: '2026-08-06',
    updatedAt: '2026-08-06',
    viewCount: 0,
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
