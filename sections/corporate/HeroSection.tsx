import { SITE_CONFIG } from '@/constants/site'
import { BUTTON_PRIMARY } from '@/sections/second-career/theme'

export function HeroSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold tracking-wide text-[#e8622a]">企業向け支援</p>
        <h1 className="mt-4 text-3xl font-bold leading-snug tracking-tight text-[#123524] sm:text-4xl">
          40代・50代を、停滞させない。
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#1f2a24] sm:text-xl">
          社員がこれまでの経験と今後の役割を整理し、会社から指示されるのを待つのではなく、自ら次の行動を考えられる状態をつくります。
        </p>
        <div className="mt-10">
          <a
            href={SITE_CONFIG.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON_PRIMARY}
          >
            企業向け支援について問い合わせる
          </a>
        </div>
      </div>
    </section>
  )
}
