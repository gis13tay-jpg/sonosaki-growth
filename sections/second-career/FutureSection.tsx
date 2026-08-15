function ClockIcon() {
  return (
    <svg className="h-10 w-10 text-[#123524]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg className="h-10 w-10 text-[#123524]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 9.5l-2 5-3 1 2-5 3-1z" />
    </svg>
  )
}

function StackIcon() {
  return (
    <svg className="h-10 w-10 text-[#123524]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l8-4 8 4-8 4-8-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8 4 8-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l8 4 8-4" />
    </svg>
  )
}

function RoadIcon() {
  return (
    <svg className="h-10 w-10 text-[#123524]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 20L11 4M16 20L13 4" />
      <path strokeLinecap="round" strokeDasharray="2 3" d="M12 4v16" />
    </svg>
  )
}

const FUTURES = [
  {
    Icon: ClockIcon,
    title: '月曜日の朝が変わる',
    body: 'また一週間が始まると重くなるのではなく、今の自分が何のために働いているかを理解している。',
  },
  {
    Icon: CompassIcon,
    title: '周囲の評価に振り回されなくなる',
    body: '誰かに認めてもらうためではなく、自分が納得できる基準で選べる。',
  },
  {
    Icon: StackIcon,
    title: 'これまでの経験が自信に変わる',
    body: '「自分には何もない」ではなく、20年間積み重ねたものを、これからどう使うか考えられる。',
  },
  {
    Icon: RoadIcon,
    title: '変化を怖がるだけではなくなる',
    body: '最初から正解を求めず、小さく試しながら、自分に合う方向へ進める。',
  },
]

export function FutureSection() {
  return (
    <section className="bg-[#eaf3ee] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold leading-snug tracking-tight text-[#123524] sm:text-3xl">
          これからの20年は、我慢して終わる時間ではない。
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[#3f4a44] sm:text-lg">
          自分が何を大切にしたいか分かれば、
          <br />
          仕事だけでなく、人生の選び方が変わります。
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FUTURES.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
              <Icon />
              <h3 className="mt-4 text-lg font-bold text-[#123524]">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#1f2a24]">{body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-xl text-center text-xl font-bold leading-relaxed text-[#123524] sm:text-2xl">
          迷わなくなるのではなく、
          <br />
          迷っても自分で選べるようになる。
        </p>
      </div>
    </section>
  )
}
