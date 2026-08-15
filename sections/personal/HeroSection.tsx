import { SITE_CONFIG } from '@/constants/site'
import { BUTTON_PRIMARY } from '@/sections/second-career/theme'

export function HeroSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-[#e8622a]">
          40代からのキャリア再設計プログラム
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-snug tracking-tight text-[#123524] sm:text-4xl sm:leading-snug">
          この先どう働くかを決める前に、
          <br />
          この先どう生きたいかを整理する6回。
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#1f2a24] sm:text-xl">
          これまでの経験と、自分が大切にしたいことを整理し、これからの方向と最初の一歩を決める個別プログラムです。
        </p>
        <div className="mt-10">
          <a
            href={SITE_CONFIG.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON_PRIMARY}
          >
            初回相談を申し込む
          </a>
        </div>
      </div>
    </section>
  )
}
