const PEOPLE = [
  {
    name: 'Aさん',
    trait: '周囲の表情や声の変化を、細かく察知する特性',
    goal: 'もっと人の成長に貢献したい',
    realize: '後輩の変化に寄り添い、成長を支える',
  },
  {
    name: 'Bさん',
    trait: '一つのことを深く掘り下げ、精度を高め続ける特性',
    goal: '自分の技術で必要とされたい',
    realize: '専門技術を磨き、次の世代へつなぐ',
  },
  {
    name: 'Cさん',
    trait: '言葉の背景にある感情や意図を想像し、相手の立場から考える特性',
    goal: '人に安心を与えられる存在になりたい',
    realize: '言葉にならない不安をくみ取り、信頼に変える',
  },
] as const

const ROOT_X = [18, 50, 82]
const ROOT_DELAYS = ['0.55s', '0.6s', '0.65s']
const PERSON_DELAYS = ['0.25s', '0.35s', '0.45s']
const HAPPINESS_DELAY = '0.95s'
const TRUNK_DELAY = '1.1s'
const COMPANY_DELAY = '1.45s'
const BRANCH_DELAYS = ['1.6s', '1.65s']
const CANOPY_DELAY = '1.9s'

function PersonCard({ person, delay }: { person: (typeof PEOPLE)[number]; delay: string }) {
  return (
    <div
      className="rounded-lg border border-[#0b1c33]/12 bg-white px-2.5 py-3 text-center opacity-0 shadow-[0_1px_3px_rgba(11,28,51,0.06)] [animation:hero-card-in_0.5s_ease-out_forwards] sm:rounded-xl sm:px-4 sm:py-4 sm:text-left"
      style={{ animationDelay: delay }}
    >
      <p className="text-[14px] font-bold text-[#0b1c33] sm:text-base">{person.name}</p>

      {/* SP：簡略4行表示 */}
      <div className="mt-1.5 sm:hidden">
        <p className="text-[12.5px] leading-snug text-slate-600">{person.trait}</p>
        <p className="mt-1 text-[11px] text-[#123524]/50">↓</p>
        <p className="text-[12.5px] font-semibold leading-snug text-[#123524]">{person.goal}</p>
      </div>

      {/* PC・タブレット：3項目フル表示 */}
      <dl className="mt-3 hidden space-y-1.5 sm:block">
        <div>
          <dt className="text-[11px] font-semibold tracking-wide text-[#123524]/60">特性</dt>
          <dd className="text-[14px] leading-snug text-slate-700">{person.trait}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-wide text-[#123524]/60">目標</dt>
          <dd className="text-[14px] leading-snug text-slate-700">{person.goal}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-wide text-[#123524]/60">会社で実現</dt>
          <dd className="whitespace-pre-line text-[14px] leading-snug text-slate-700">{person.realize}</dd>
        </div>
      </dl>
    </div>
  )
}

function TreeDiagram() {
  return (
    <div className="rounded-[28px] bg-[#F1EFE5] p-4 sm:p-6 lg:p-7">
      {/* 幹・枝・根：1つのSVGで一体描画 */}
      <div className="relative h-[210px] sm:h-[250px] lg:h-[270px]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {/* 根：A・B・Cから中央の合流点へ */}
          {ROOT_X.map((x, i) => (
            <path
              key={x}
              d={`M${x},100 L50,66`}
              fill="none"
              stroke="#123524"
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              className="opacity-70 [animation:hero-svg-line-draw_0.5s_ease-out_forwards]"
              style={{ animationDelay: ROOT_DELAYS[i] }}
            />
          ))}
          {/* 幹：合流点から枝分かれ点へ */}
          <path
            d="M50,66 L50,36"
            fill="none"
            stroke="#123524"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={100}
            className="[animation:hero-svg-line-draw_0.45s_ease-out_forwards]"
            style={{ animationDelay: TRUNK_DELAY }}
          />
          {/* 枝：左右に広がり樹冠へ */}
          <path
            d="M50,36 L23,15"
            fill="none"
            stroke="#123524"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={100}
            className="opacity-80 [animation:hero-svg-line-draw_0.35s_ease-out_forwards]"
            style={{ animationDelay: BRANCH_DELAYS[0] }}
          />
          <path
            d="M50,36 L77,15"
            fill="none"
            stroke="#123524"
            strokeWidth="1.5"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={100}
            className="opacity-80 [animation:hero-svg-line-draw_0.35s_ease-out_forwards]"
            style={{ animationDelay: BRANCH_DELAYS[1] }}
          />
        </svg>

        {/* 樹冠：社会への貢献 */}
        <div
          className="absolute left-1/2 top-[3%] w-[78%] -translate-x-1/2 rounded-2xl bg-gradient-to-r from-[#0b1c33] to-[#123524] px-3 py-3 text-center opacity-0 shadow-[0_6px_18px_rgba(11,28,51,0.22)] [animation:hero-foundation-in_0.55s_ease-out_forwards] sm:py-4"
          style={{ animationDelay: CANOPY_DELAY }}
        >
          <p className="text-[17px] font-bold text-white sm:text-[20px] lg:text-[22px]">社会への貢献</p>
        </div>

        {/* 幹上ラベル：会社の成長 */}
        <div
          className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#F1EFE5] px-2.5 py-1 opacity-0 [animation:hero-card-in_0.5s_ease-out_forwards]"
          style={{ animationDelay: COMPANY_DELAY }}
        >
          <p className="text-[15px] font-bold text-[#123524] sm:text-[17px] lg:text-[19px]">会社の成長</p>
        </div>

        {/* 合流点ラベル：従業員の幸福度 */}
        <div
          className="absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#F1EFE5] px-2.5 py-1 opacity-0 [animation:hero-card-in_0.5s_ease-out_forwards]"
          style={{ animationDelay: HAPPINESS_DELAY }}
        >
          <p className="text-[14px] font-bold text-[#0b1c33] sm:text-[16px] lg:text-[18px]">従業員の幸福度</p>
        </div>
      </div>

      {/* 根：A・B・C（横3列を維持） */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {PEOPLE.map((person, index) => (
          <PersonCard key={person.name} person={person} delay={PERSON_DELAYS[index]} />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="overflow-x-hidden bg-[#F7F7F2] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[44%_56%] lg:gap-10">
          {/* 左：コピー */}
          <div className="text-left">
            <p
              className="text-[16px] leading-relaxed text-slate-600 opacity-0 [animation:hero-fade-up_0.55s_ease-out_forwards] sm:text-lg"
              style={{ animationDelay: '0s' }}
            >
              <span className="hero-marker font-semibold">人を理解すること</span>から、組織は変わる。
            </p>

            <h1
              className="mt-4 text-[29px] font-extrabold leading-[1.35] tracking-tighter text-[#0b1c33] opacity-0 [animation:hero-fade-up_0.6s_ease-out_forwards] sm:text-5xl sm:tracking-tight lg:text-[40px] xl:text-[44px]"
              style={{ animationDelay: '0.1s' }}
            >
              働く人の夢が叶うほど、
              <br />
              会社も強くなる。
            </h1>

            <p
              className="mt-5 text-[16px] leading-relaxed text-slate-600 opacity-0 [animation:hero-fade-up_0.6s_ease-out_forwards] sm:text-lg"
              style={{ animationDelay: '0.2s' }}
            >
              一人ひとりの特性と目標を、会社で力を発揮できる役割へつなぎます。
            </p>
          </div>

          {/* 右：組織ツリー */}
          <div>
            <TreeDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
