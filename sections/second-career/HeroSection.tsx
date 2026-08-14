import { BUTTON_PRIMARY } from '@/sections/second-career/theme'
import { TimelineVisual } from '@/sections/second-career/TimelineVisual'

export function HeroSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold leading-snug tracking-tight text-[#123524] sm:text-4xl sm:leading-snug">
          これまでの20年を、
          <br />
          これからの20年の力に。
        </h1>
        <p className="mt-6 text-lg font-semibold leading-relaxed text-[#1f2a24] sm:text-xl">
          これからの人生を、
          <br />
          誰かの正解ではなく、自分で選べるようになる。
        </p>
        <p className="mt-6 text-base leading-relaxed text-[#3f4a44] sm:text-lg">
          自分が大切にしたいことと、これまで積み重ねてきた経験を整理し、これからの生き方・働き方を自分で決めるためのキャリア再設計支援です。
        </p>
        <div className="mt-10">
          <a href="#diagnosis" className={BUTTON_PRIMARY}>
            まず5つの質問に答える
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        <TimelineVisual />
      </div>
    </section>
  )
}
