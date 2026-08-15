import Link from 'next/link'
import { BUTTON_ON_DARK, BUTTON_OUTLINE } from '@/sections/second-career/theme'

export function FinalCTASection() {
  return (
    <section className="bg-[#123524] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
          あと20年ではなく、
          <br />
          まだ20年ある。
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/85">
          これまで積み重ねてきた経験は、過去のものではありません。
          <br />
          自分が大切にしたいことを理解し、使う場所を見つければ、これからの人生をつくる力になります。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/personal" className={BUTTON_ON_DARK}>
            プログラム内容と料金を見る
          </Link>
          <Link
            href="/corporate"
            className={`${BUTTON_OUTLINE} border-white text-white hover:bg-white hover:text-[#123524] focus-visible:ring-white focus-visible:ring-offset-[#123524]`}
          >
            企業向け支援を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
