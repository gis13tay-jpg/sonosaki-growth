export type OrgDiagnosisAnswer = 'yes' | 'neutral' | 'no'

export type OrgDiagnosisCategory =
  | 'recruitingMessage'
  | 'retentionSupport'
  | 'individualUnderstanding'
  | 'roleFit'
  | 'internalCommunication'
  | 'orgCulture'

export type OrgDiagnosisQuestion = {
  id: string
  question: string
  category: OrgDiagnosisCategory
  // true: 設問が肯定文のため「いいえ」が課題シグナルになる逆転項目
  reverse: boolean
}

export const ANSWER_OPTIONS: { value: OrgDiagnosisAnswer; label: string }[] = [
  { value: 'yes', label: 'はい' },
  { value: 'neutral', label: 'どちらともいえない' },
  { value: 'no', label: 'いいえ' },
]

// Q1・Q2は課題を直接尋ねる設問、Q3〜Q6は逆転項目（「はい」=健全、「いいえ」=課題シグナル）
export const ORG_DIAGNOSIS_QUESTIONS: OrgDiagnosisQuestion[] = [
  {
    id: 'q1',
    question: '求人を出しても、求める人からの応募が来ないと感じますか？',
    category: 'recruitingMessage',
    reverse: false,
  },
  {
    id: 'q2',
    question: '採用した人が、1年以内に辞めることがある',
    category: 'retentionSupport',
    reverse: false,
  },
  {
    id: 'q3',
    question: '社員一人ひとりが大切にしている価値観を把握している',
    category: 'individualUnderstanding',
    reverse: true,
  },
  {
    id: 'q4',
    question: '社員ごとに、力を発揮しやすい環境や伝え方を把握している',
    category: 'roleFit',
    reverse: true,
  },
  {
    id: 'q5',
    question: '社員が「なぜこの会社で働いているのか」を自分の言葉で話せる',
    category: 'internalCommunication',
    reverse: true,
  },
  {
    id: 'q6',
    question: '人や組織の問題が起きたとき、原因を具体的に説明できる',
    category: 'orgCulture',
    reverse: true,
  },
]

export type OrgDiagnosisResultType = {
  key: OrgDiagnosisCategory | 'healthy'
  label: string
  possibility: string
  firstSteps: [string, string, string]
  beforeAfterAnchor: '#before-after-hiring' | '#before-after-retention' | '#before-after-organization'
  columnLink: { href: string; label: string }
}

export const ORG_DIAGNOSIS_RESULT_TYPES: Record<OrgDiagnosisCategory, OrgDiagnosisResultType> = {
  recruitingMessage: {
    key: 'recruitingMessage',
    label: '採用メッセージ未設計タイプ',
    possibility:
      '自社で働く魅力や求める人物像が言語化できておらず、求める人に届く採用メッセージになっていない可能性があります。',
    firstSteps: [
      '自社がどんな人に来てほしいのかを言葉にする',
      '条件や待遇だけでなく、大切にしている価値観を伝える',
      '求人情報とホームページ・SNSの発信内容を揃える',
    ],
    beforeAfterAnchor: '#before-after-hiring',
    columnLink: { href: '/blog/concern/hiring-apply', label: '採用に関するコラムを見る' },
  },
  retentionSupport: {
    key: 'retentionSupport',
    label: '定着支援不足タイプ',
    possibility:
      '入社前後の情報のギャップやフォロー不足により、早期離職が起こりやすい状態にある可能性があります。',
    firstSteps: [
      '入社前後で伝えている情報にズレがないか確認する',
      '入社後、一定期間はフォローの機会を設ける',
      '本人の特性に合った配置・関わり方を見直す',
    ],
    beforeAfterAnchor: '#before-after-retention',
    columnLink: { href: '/blog/concern/hiring-retain', label: '定着に関するコラムを見る' },
  },
  individualUnderstanding: {
    key: 'individualUnderstanding',
    label: '個人理解不足タイプ',
    possibility:
      '社員一人ひとりの価値観や大切にしていることを、十分に把握できていない可能性があります。',
    firstSteps: [
      '一人ひとりと価値観について話す機会をつくる',
      '評価や配置の前提となる「その人を知る」時間を確保する',
      '分かったことを記録し、日々の関わり方に活かす',
    ],
    beforeAfterAnchor: '#before-after-organization',
    columnLink: { href: '/blog', label: '関連コラムを見る' },
  },
  roleFit: {
    key: 'roleFit',
    label: '役割・配置ミスマッチタイプ',
    possibility:
      '本人が力を発揮しやすい環境や任せ方と、実際の役割・配置が噛み合っていない可能性があります。',
    firstSteps: [
      '本人が力を発揮しやすい条件を確認する',
      '現在の役割・任せ方とのギャップを洗い出す',
      '小さな範囲から任せ方を調整してみる',
    ],
    beforeAfterAnchor: '#before-after-organization',
    columnLink: { href: '/blog', label: '関連コラムを見る' },
  },
  internalCommunication: {
    key: 'internalCommunication',
    label: '社内コミュニケーション不足タイプ',
    possibility:
      '会社として大切にしていることが、社員一人ひとりの言葉として浸透していない可能性があります。',
    firstSteps: [
      '会社として大切にしていることを、日常的に伝える場をつくる',
      '社員が自分の言葉で話せる対話の機会を設ける',
      '伝える側と受け取る側の理解のズレを確認する',
    ],
    beforeAfterAnchor: '#before-after-organization',
    columnLink: { href: '/blog', label: '関連コラムを見る' },
  },
  orgCulture: {
    key: 'orgCulture',
    label: '組織文化アプローチ不足タイプ',
    possibility:
      '人や組織に問題が起きた際、原因を具体的に説明できず、場当たり的な対応になっている可能性があります。',
    firstSteps: [
      '問題が起きたときに、事実と背景を分けて整理する',
      '個人の特性・価値観の観点から原因を捉え直す',
      '再発防止につながる仕組みを検討する',
    ],
    beforeAfterAnchor: '#before-after-organization',
    columnLink: { href: '/blog', label: '関連コラムを見る' },
  },
}

export const ORG_DIAGNOSIS_HEALTHY_RESULT: OrgDiagnosisResultType = {
  key: 'healthy',
  label: '組織の基盤が整っているタイプ',
  possibility:
    '現在の回答を見る限り、採用・定着・組織づくりについて一定の理解が進んでいる状態です。ただし、状況の変化によって新たな課題が見えてくることもあります。',
  firstSteps: [
    '定期的に社員の状態を確認する機会を保つ',
    'これまでの採用・定着・組織づくりの取り組みを振り返る',
    '気になる変化があれば早めに整理する',
  ],
  beforeAfterAnchor: '#before-after-organization',
  columnLink: { href: '/blog', label: '関連コラムを見る' },
}

function concernScore(answer: OrgDiagnosisAnswer, reverse: boolean): number {
  if (answer === 'neutral') return 1
  const isProblemAnswer = reverse ? answer === 'no' : answer === 'yes'
  return isProblemAnswer ? 2 : 0
}

export function scoreOrgDiagnosis(answers: OrgDiagnosisAnswer[]): {
  resultType: OrgDiagnosisResultType
  scores: Record<OrgDiagnosisCategory, number>
} {
  const scores = {
    recruitingMessage: 0,
    retentionSupport: 0,
    individualUnderstanding: 0,
    roleFit: 0,
    internalCommunication: 0,
    orgCulture: 0,
  } as Record<OrgDiagnosisCategory, number>

  ORG_DIAGNOSIS_QUESTIONS.forEach((q, index) => {
    const answer = answers[index]
    if (!answer) return
    scores[q.category] = concernScore(answer, q.reverse)
  })

  const maxScore = Math.max(...Object.values(scores))
  if (maxScore === 0) {
    return { resultType: ORG_DIAGNOSIS_HEALTHY_RESULT, scores }
  }

  const dominant = ORG_DIAGNOSIS_QUESTIONS.find((q) => scores[q.category] === maxScore)!.category
  return { resultType: ORG_DIAGNOSIS_RESULT_TYPES[dominant], scores }
}
