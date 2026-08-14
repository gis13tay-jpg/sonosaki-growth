const COSTS = [
  '目的のない資格や講座にお金を使う',
  '原因が分からないまま環境を変える',
  '今いる場所で使える機会を見逃す',
  '新しい経験を積む時間が少なくなる',
  '半年後も同じことで迷い続ける',
]

export function CostSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#123524] sm:text-3xl">
          迷ったまま過ごす時間にも、コストがあります
        </h2>

        <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#1f2a24]">
          <p>
            転職するか決められない。
            <br />
            何を学べばいいか分からない。
            <br />
            でも、このままでいいとも思えない。
          </p>
          <p>
            判断基準がないままでは、求人を見ても、資格を取っても、また迷いが戻ってきます。
          </p>
          <p>
            40代以降は、焦って動くことにも、何も決めずに過ごすことにもコストがあります。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {COSTS.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#123524]/15 bg-[#f7f2ea] p-5 text-base leading-relaxed text-[#1f2a24]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
