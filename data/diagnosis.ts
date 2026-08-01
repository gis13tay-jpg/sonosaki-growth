export type DiagnosisRoute = 'acquisition' | 'hiring'

export type DiagnosisArea = {
  key: string
  label: string
}

export type DiagnosisOption = {
  label: string
  scores: Record<string, number>
}

export type DiagnosisQuestion = {
  question: string
  options: DiagnosisOption[]
}

export type DiagnosisResultType = {
  key: string
  label: string
  description: string
}

// 集客ルートで改善優先順位を算出する3エリア
export const ACQUISITION_AREAS: DiagnosisArea[] = [
  { key: 'discovery', label: 'Google検索・AI検索' },
  { key: 'conversion', label: 'ホームページ改善' },
  { key: 'retention', label: 'LINE導線' },
]

// 採用ルートで改善優先順位を算出する3エリア
export const HIRING_AREAS: DiagnosisArea[] = [
  { key: 'hiring-discovery', label: 'Google検索・AI検索（採用向け）' },
  { key: 'hiring-appeal', label: '採用ページ・求人情報の改善' },
  { key: 'hiring-retention', label: '入社前後の情報共有・定着導線' },
]

export const ACQUISITION_QUESTIONS: DiagnosisQuestion[] = [
  {
    question: '現在、新しいお客様はどこから来ることが一番多いですか？',
    options: [
      { label: '紹介', scores: { discovery: 2 } },
      { label: 'Google検索', scores: { discovery: 0 } },
      { label: 'Googleマップ', scores: { discovery: 0 } },
      { label: 'Instagram・SNS', scores: { discovery: 0 } },
      { label: '広告', scores: { discovery: 1 } },
      { label: '分からない', scores: { discovery: 2 } },
    ],
  },
  {
    question: 'ホームページを見た人は、そのまま問い合わせできますか？',
    options: [
      { label: 'はい', scores: { conversion: 0 } },
      { label: 'できるが少ない', scores: { conversion: 2 } },
      { label: '分からない', scores: { conversion: 2 } },
      { label: 'ホームページがない', scores: { conversion: 3, discovery: 1 } },
    ],
  },
  {
    question: 'Google検索やChatGPT・Geminiなどで調べた人に、見つけてもらえていますか？',
    options: [
      { label: 'はい', scores: { discovery: 0 } },
      { label: '少し', scores: { discovery: 2 } },
      { label: '分からない', scores: { discovery: 2 } },
      { label: 'ほとんど見つからない', scores: { discovery: 3 } },
    ],
  },
  {
    question: '問い合わせ後、継続的に接点を持つ仕組みはありますか？',
    options: [
      { label: 'LINE', scores: { retention: 0 } },
      { label: 'メール', scores: { retention: 1 } },
      { label: '特にない', scores: { retention: 3 } },
      { label: '分からない', scores: { retention: 2 } },
    ],
  },
]

export const HIRING_PROBLEM_QUESTION: DiagnosisQuestion = {
  question: '現在、一番困っていることは？',
  options: [
    { label: '応募が来ない', scores: {} },
    { label: '面接まで進まない', scores: {} },
    { label: '内定辞退', scores: {} },
    { label: '入社後すぐ辞める', scores: {} },
  ],
}

export const HIRING_QUESTIONS: DiagnosisQuestion[] = [
  HIRING_PROBLEM_QUESTION,
  {
    question: '会社の魅力を伝えるページはありますか？',
    options: [
      { label: '十分ある', scores: { 'hiring-appeal': 0 } },
      { label: '少しある', scores: { 'hiring-appeal': 2 } },
      { label: 'ない', scores: { 'hiring-appeal': 3 } },
      { label: '分からない', scores: { 'hiring-appeal': 2 } },
    ],
  },
  {
    question: 'Google検索やChatGPT・Geminiなどで会社を調べた人に、魅力が伝わる情報はありますか？',
    options: [
      { label: 'はい', scores: { 'hiring-discovery': 0 } },
      { label: '少し', scores: { 'hiring-discovery': 2 } },
      { label: '分からない', scores: { 'hiring-discovery': 2 } },
      { label: 'ほとんどない', scores: { 'hiring-discovery': 3 } },
    ],
  },
  {
    question: '入社前に仕事内容や社風を十分伝えられていますか？',
    options: [
      { label: 'はい', scores: { 'hiring-retention': 0 } },
      { label: '少し', scores: { 'hiring-retention': 2 } },
      { label: '分からない', scores: { 'hiring-retention': 2 } },
      { label: 'あまりできていない', scores: { 'hiring-retention': 3 } },
    ],
  },
]

export const ACQUISITION_RESULT_TYPES: Record<string, DiagnosisResultType> = {
  discovery: {
    key: 'discovery',
    label: '見つけてもらえていないタイプ',
    description:
      '検索や地図、SNSなど、そもそも見つけてもらえる接点が少ない状態です。まずは見つけてもらう入口を増やすことが優先です。',
  },
  conversion: {
    key: 'conversion',
    label: '選ばれにくいタイプ',
    description:
      '見つけてもらえてはいるものの、ホームページを見た後の行動につながりにくい状態です。伝え方や導線の見直しが効果的です。',
  },
  retention: {
    key: 'retention',
    label: 'リピーター・ファン化タイプ',
    description:
      '新規のお客様への入口はある程度できていますが、その後の関係が続きにくい状態です。再来店・再依頼につながる仕組みが有効です。',
  },
  funnel: {
    key: 'funnel',
    label: '導線改善タイプ',
    description:
      '見つける・伝える・問い合わせるという一連の流れ全体に、改善できる余地が複数あります。優先順位をつけて整理するところから始めましょう。',
  },
  healthy: {
    key: 'healthy',
    label: '集客の基盤が整っているタイプ',
    description:
      '現在の回答を見る限り、集客の基本的な仕組みはある程度整っています。ただし、実際の問い合わせ数や成約率によっては、見えていない改善点が残っている可能性があります。',
  },
}

export const HIRING_RESULT_TYPES: Record<string, DiagnosisResultType> = {
  '応募が来ない': {
    key: 'hiring-discovery',
    label: '見つけてもらえていないタイプ（採用）',
    description:
      '求職者に会社の存在自体が見つけてもらえていない可能性があります。まずは検索や求人媒体での見え方を整えることが優先です。',
  },
  '面接まで進まない': {
    key: 'hiring-appeal',
    label: '魅力が伝わっていないタイプ',
    description:
      '会社は見つけてもらえていても、働く魅力が十分に伝わっていない可能性があります。仕事内容や社風を伝える情報の充実が効果的です。',
  },
  '内定辞退': {
    key: 'hiring-process',
    label: '選考導線タイプ',
    description:
      '選考の途中で辞退が発生しやすい状態です。応募から内定までのやり取りや情報提供に改善余地があります。',
  },
  '入社後すぐ辞める': {
    key: 'hiring-retention',
    label: '定着タイプ',
    description:
      '入社は決まるものの、その後の定着に課題がある可能性があります。入社前後の情報共有や、フォロー体制の見直しが有効です。',
  },
}

export const HIRING_HEALTHY_TYPE: DiagnosisResultType = {
  key: 'healthy',
  label: '採用の基盤が整っているタイプ',
  description:
    '現在の回答を見る限り、採用情報や入社前後の説明はある程度整っています。ただし、応募数や定着率に課題がある場合は、情報の内容や伝わり方まで確認する必要があります。',
}

export const HIRING_APPLY_HEALTHY_TYPE: DiagnosisResultType = {
  key: 'healthy-apply',
  label: '採用情報は整っているタイプ',
  description:
    '現在の回答を見る限り、\n採用ページや会社情報の土台はある程度整っています。\n\nそれでも応募が集まらない場合は、\n\n・会社を知ってもらう機会\n・Google検索やAI検索での露出\n・求人情報の届け方\n\nなどに改善の余地がある可能性があります。',
}

function starsFromScore(score: number, maxScore: number) {
  const ratio = maxScore > 0 ? score / maxScore : 0
  return Math.min(5, Math.max(1, Math.round(1 + ratio * 4)))
}

export type PriorityItem = {
  label: string
  stars: number
}

export function scoreAcquisition(answers: DiagnosisOption[]) {
  const totals: Record<string, number> = { discovery: 0, conversion: 0, retention: 0 }
  for (const answer of answers) {
    for (const [area, value] of Object.entries(answer.scores)) {
      totals[area] = (totals[area] ?? 0) + value
    }
  }

  const maxByArea: Record<string, number> = { discovery: 5, conversion: 3, retention: 3 }
  const priorities: PriorityItem[] = ACQUISITION_AREAS.map((area) => ({
    label: area.label,
    stars: starsFromScore(totals[area.key] ?? 0, maxByArea[area.key]),
  })).sort((a, b) => b.stars - a.stars)

  const hasNoWebsite = answers[1]?.label === 'ホームページがない'
  const allLowPriority = priorities.every((item) => item.stars === 1)

  let resultType: DiagnosisResultType
  if (hasNoWebsite) {
    resultType = ACQUISITION_RESULT_TYPES.funnel
  } else if (allLowPriority) {
    resultType = ACQUISITION_RESULT_TYPES.healthy
  } else {
    const ratios: Record<string, number> = {
      discovery: (totals.discovery ?? 0) / maxByArea.discovery,
      conversion: (totals.conversion ?? 0) / maxByArea.conversion,
      retention: (totals.retention ?? 0) / maxByArea.retention,
    }
    const sortedAreas = Object.entries(ratios).sort((a, b) => b[1] - a[1])
    const [topArea, topRatio] = sortedAreas[0]
    const [, secondRatio] = sortedAreas[1]

    resultType =
      topRatio - secondRatio < 0.15
        ? ACQUISITION_RESULT_TYPES.funnel
        : ACQUISITION_RESULT_TYPES[topArea]
  }

  return { resultType, priorities }
}

export function scoreHiring(answers: DiagnosisOption[]) {
  const totals: Record<string, number> = {
    'hiring-discovery': 0,
    'hiring-appeal': 0,
    'hiring-retention': 0,
  }
  for (const answer of answers.slice(1)) {
    for (const [area, value] of Object.entries(answer.scores)) {
      totals[area] = (totals[area] ?? 0) + value
    }
  }

  const priorities: PriorityItem[] = HIRING_AREAS.map((area) => ({
    label: area.label,
    stars: starsFromScore(totals[area.key] ?? 0, 3),
  })).sort((a, b) => b.stars - a.stars)

  const allLowPriority = priorities.every((item) => item.stars === 1)
  const resultType = allLowPriority
    ? answers[0]?.label === '応募が来ない'
      ? HIRING_APPLY_HEALTHY_TYPE
      : HIRING_HEALTHY_TYPE
    : (HIRING_RESULT_TYPES[answers[0]?.label ?? ''] ?? HIRING_RESULT_TYPES['応募が来ない'])

  return { resultType, priorities }
}
