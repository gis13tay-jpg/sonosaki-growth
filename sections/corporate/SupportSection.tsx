const SUPPORTS = [
  'キャリア再設計研修',
  '個別キャリア面談',
  '社内での役割・ポジション検討',
  '90日間の行動支援',
  '匿名・集約した組織分析',
  '人事・経営層への改善提言',
]

export function SupportSection() {
  return (
    <section className="bg-[#f4f4f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">支援内容</h2>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2" role="list">
          {SUPPORTS.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[#123524]/15 bg-white p-5 text-base font-medium leading-relaxed text-[#1f2a24]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base leading-relaxed text-[#3f4a44]">
          個別面談で伺った内容は、本人の同意なく、そのまま企業へ報告することはありません。企業へは匿名・集約した傾向として共有します。
        </p>
      </div>
    </section>
  )
}
