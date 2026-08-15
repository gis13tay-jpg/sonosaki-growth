import Link from 'next/link'
import { BUTTON_OUTLINE } from '@/sections/second-career/theme'

const FLOW = [
  '今後の役割が見えない',
  '意欲と主体性が低下する',
  '指示された仕事だけになる',
  '経験が組織で活かされない',
  '若手への負担と組織の停滞が広がる',
]

const PROBLEMS = [
  '経験のある社員が最低限の業務だけを続ける',
  '人件費と貢献度のバランスが崩れる',
  '若手が次の役割へ進みにくくなる',
  'ベテランの知識や判断力が継承されない',
  '役職定年後の配置が決まらない',
  '本人も会社も動けない状態が長期化する',
  '活躍できる社員まで将来に希望を持ちにくくなる',
]

export function CorporateRiskSection() {
  return (
    <section className="bg-[#f4f4f5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-bold leading-snug tracking-tight text-[#123524] sm:text-3xl">
          40代・50代社員の停滞は、本人だけの問題ではありません。
        </h2>

        <div className="mt-10 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3">
          {FLOW.map((step, idx) => (
            <div key={step} className="flex items-center gap-2 md:contents">
              <div className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold leading-snug text-[#123524] shadow-sm sm:text-base">
                {step}
              </div>
              {idx < FLOW.length - 1 && (
                <span className="text-[#123524]/40 md:rotate-0" aria-hidden="true">
                  <svg className="h-5 w-5 rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
          {PROBLEMS.map((item) => (
            <li key={item} className="text-base leading-relaxed text-[#3f4a44]">
              ・{item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-lg leading-relaxed text-[#1f2a24]">
          社員に「自分でキャリアを考えてほしい」と伝えるだけでは、行動は変わりません。本人への働きかけと、経験を活かせる役割・制度の両方が必要です。
        </p>

        <div className="mt-8 text-center">
          <Link href="/corporate" className={BUTTON_OUTLINE}>
            企業向け支援を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
