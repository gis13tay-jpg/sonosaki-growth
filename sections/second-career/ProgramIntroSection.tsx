import Link from 'next/link'
import { BUTTON_PRIMARY } from '@/sections/second-career/theme'

export function ProgramIntroSection() {
  return (
    <section className="bg-[#f7f2ea] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#123524] sm:text-3xl">
          これからの20年を、自分で選び直す時間をつくる。
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[#1f2a24]">
          一度の相談で答えを出すのではなく、全6回を通して、感情・判断基準・これまでの経験・今後の方向性を順番に整理します。
          <br className="hidden sm:block" />
          最後は考えて終わるのではなく、自分で決めた最初の行動を実行できる状態を目指します。
        </p>
        <div className="mt-8">
          <Link href="/personal" className={BUTTON_PRIMARY}>
            プログラム内容と料金を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
