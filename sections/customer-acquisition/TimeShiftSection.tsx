function FlowStep({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 text-center text-sm font-medium ${
        highlight
          ? 'border-primary bg-primary text-white'
          : 'border-border bg-white text-foreground'
      }`}
    >
      {label}
    </div>
  )
}

function DownArrow({ muted = false }: { muted?: boolean }) {
  return (
    <div className="flex justify-center py-1.5">
      <svg
        className={`h-4 w-4 ${muted ? 'text-gray-300' : 'text-border'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  )
}

export function TimeShiftSection() {
  return (
    <section id="customer-journey" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            顧客の「探し方」は、
            <br />
            もうひとつではありません。
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-fg sm:text-lg">
            AI検索・SNS・Google・ホームページを行き来しながら、
            サービスを理解し、比較する人が増えています。
          </p>
        </div>

        {/* 比較図 */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">

          {/* 以前 */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
              以前
            </span>
            <p className="mt-4 text-2xl font-extrabold text-gray-400 line-through decoration-2 sm:text-3xl">
              Google検索だけ
            </p>
            <p className="mt-1 mb-6 text-sm text-muted-fg">見ている場所は、ひとつだけでした</p>
            <div className="space-y-0">
              <FlowStep label="Google で検索する" />
              <DownArrow muted />
              <FlowStep label="複数のホームページを閲覧" />
              <DownArrow muted />
              <FlowStep label="比較・検討する" />
              <DownArrow muted />
              <FlowStep label="問い合わせる" highlight />
            </div>
          </div>

          {/* 現在 */}
          <div className="rounded-2xl border-2 border-primary bg-white p-6 shadow-md sm:p-8">
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              現在
            </span>
            <p className="mt-4 text-2xl font-extrabold text-primary sm:text-3xl">
              Google・AI・SNS・ホームページ
            </p>
            <p className="mt-1 mb-6 text-sm text-muted-fg">複数の場所を行き来して比較しています</p>
            <div className="space-y-0">
              <FlowStep label="HP・SNSを行き来して確認" />
              <DownArrow />
              <FlowStep label="他の候補と比較する" />
              <DownArrow />
              <FlowStep label="問い合わせる" highlight />
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-muted-fg">
          ※ 顧客の行動パターンは人・業種・検討段階によって異なります。
        </p>

        {/* キーメッセージ */}
        <div className="mt-10 rounded-xl border-l-4 border-primary bg-primary-light px-6 py-6 sm:px-8 sm:py-7">
          <p className="font-semibold text-foreground">
            必要なのは、AI検索だけの対策ではありません。
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted-fg">
            どこで見つけられても、同じ価値が伝わり、
            次の行動につながる導線が必要です。
          </p>
        </div>
      </div>
    </section>
  )
}
