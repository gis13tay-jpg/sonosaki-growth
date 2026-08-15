export type DiagnosisTypeKey = 'A' | 'B' | 'C' | 'D'

export type DiagnosisOption = {
  key: DiagnosisTypeKey
  label: string
}

export type DiagnosisQuestion = {
  id: string
  question: string
  options: DiagnosisOption[]
}

// A→B→C→Dの順に固定表示する（同点時の並び順・優先順位にもこの順序をそのまま使用する）
export const DIAGNOSIS_TYPE_ORDER: DiagnosisTypeKey[] = ['A', 'B', 'C', 'D']

export const DIAGNOSIS_QUESTIONS: DiagnosisQuestion[] = [
  {
    id: 'q1',
    question: '最近、仕事についてどう感じますか？',
    options: [
      { key: 'A', label: '周囲から期待される役割を続けるべきだと思う' },
      { key: 'B', label: '大きな不満はないのに、気持ちが晴れない' },
      { key: 'C', label: '今までの経験が今後も通用するか不安' },
      { key: 'D', label: '変えたいと思うが、何も始められていない' },
    ],
  },
  {
    id: 'q2',
    question: 'これからどうしたいか聞かれたら？',
    options: [
      { key: 'A', label: '家族や会社が納得する答えを考える' },
      { key: 'B', label: '自分でも何を望んでいるか分からない' },
      { key: 'C', label: '自分に何ができるのか分からない' },
      { key: 'D', label: '選択肢は浮かぶが、どれにも決められない' },
    ],
  },
  {
    id: 'q3',
    question: 'これまでの仕事を振り返ると？',
    options: [
      { key: 'A', label: '求められることに応え続けてきた' },
      { key: 'B', label: '頑張ってきたが、何のためだったか分からない' },
      { key: 'C', label: '特別な経験や強みはないと思う' },
      { key: 'D', label: 'いろいろ考えてきたが、状況は変わっていない' },
    ],
  },
  {
    id: 'q4',
    question: '新しい選択肢を見たときは？',
    options: [
      { key: 'A', label: '周囲からどう見られるかが気になる' },
      { key: 'B', label: '自分に合っているのか判断できない' },
      { key: 'C', label: '自分の経験をどう活かせるか分からない' },
      { key: 'D', label: '失敗が怖く、情報を集めるだけになる' },
    ],
  },
  {
    id: 'q5',
    question: '今、一番知りたいことは？',
    options: [
      { key: 'A', label: '自分は本当は何を大切にしたいのか' },
      { key: 'B', label: 'このモヤモヤはどこから来ているのか' },
      { key: 'C', label: 'これまでの経験を今後どう使えるのか' },
      { key: 'D', label: '何から始めれば状況が動くのか' },
    ],
  },
]

export type DiagnosisResultType = {
  key: DiagnosisTypeKey
  name: string
  state: string
  cause: string
  need: string
  whyHardAlone: string
}

export const DIAGNOSIS_RESULT_TYPES: Record<DiagnosisTypeKey, DiagnosisResultType> = {
  A: {
    key: 'A',
    name: '周囲基準タイプ',
    state: '人の期待には応えてきた。でも、自分の希望が分からない。',
    cause: '家族、会社、周囲の期待と、自分の希望が混ざっている。',
    need: '誰かに求められてきた役割と、自分が大切にしたいことを分ける。',
    whyHardAlone:
      '自分で選んだと思っていることほど、誰かの価値観が入り込んでいることに気づきにくいため。',
  },
  B: {
    key: 'B',
    name: 'モヤモヤタイプ',
    state: '不満は説明できない。でも、このままではいたくない。',
    cause: '感情は動いているのに、その理由を言葉にできていない。',
    need: '過去の出来事や感情が動いた場面から、違和感の正体を見つける。',
    whyHardAlone:
      '一人で考えると「疲れているだけ」「仕事なんてこんなもの」と、自分の感情を小さく扱いやすいため。',
  },
  C: {
    key: 'C',
    name: '経験が見えないタイプ',
    state: '20年以上働いてきたのに、自分には何もないと感じる。',
    cause: '長く続けてきたことほど、自分にとって当たり前になっている。',
    need: '職歴だけでなく、判断力、業界理解、問題解決経験、人との関係まで含めて整理する。',
    whyHardAlone:
      '自分にとって普通にできることが、ほかの環境でどのような価値を持つかは自分では判断しにくいため。',
  },
  D: {
    key: 'D',
    name: '考えて止まるタイプ',
    state: '考えているのに、半年後も同じ場所にいる。',
    cause: '失敗しない答えを探し続け、最初に試す行動が決まっていない。',
    need: '完璧な答えを出すのではなく、小さく試して判断できる行動を決める。',
    whyHardAlone:
      '不安が強いと、行動するためではなく、動かなくていい理由を探すために考え続けやすいため。',
  },
}

// 5問の回答（選んだtype）から、最多得票のタイプを判定する。
// 完全同点の場合は、A→B→C→Dの表示順で上位2タイプを「複合タイプ」として返す。
export function scoreDiagnosis(answers: DiagnosisTypeKey[]): DiagnosisTypeKey[] {
  const counts: Record<DiagnosisTypeKey, number> = { A: 0, B: 0, C: 0, D: 0 }
  for (const answer of answers) counts[answer] += 1

  const max = Math.max(...DIAGNOSIS_TYPE_ORDER.map((key) => counts[key]))
  const tied = DIAGNOSIS_TYPE_ORDER.filter((key) => counts[key] === max)

  return tied.length <= 1 ? tied : tied.slice(0, 2)
}
