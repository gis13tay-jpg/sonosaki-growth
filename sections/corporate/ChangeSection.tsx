const EMPLOYEE_CHANGES = [
  '自分の経験を理解する',
  '今後の役割を自分で考える',
  '上司とキャリアについて対話する',
  '具体的な行動を始める',
]

const COMPANY_CHANGES = [
  '社員が停滞している原因を把握する',
  '経験を活かせる役割を検討する',
  '不足しているキャリアパスを見直す',
  'ベテラン社員の経験を組織で活用する',
]

export function ChangeSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">目指す変化</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#123524]/20 bg-[#eaf3ee] p-6 sm:p-7">
            <p className="text-base font-semibold text-[#123524]">社員</p>
            <ul className="mt-4 space-y-3" role="list">
              {EMPLOYEE_CHANGES.map((item) => (
                <li key={item} className="text-base leading-relaxed text-[#1f2a24]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#123524]/20 bg-[#f7f2ea] p-6 sm:p-7">
            <p className="text-base font-semibold text-[#123524]">企業</p>
            <ul className="mt-4 space-y-3" role="list">
              {COMPANY_CHANGES.map((item) => (
                <li key={item} className="text-base leading-relaxed text-[#1f2a24]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
