'use client'

import { useEffect, useState } from 'react'
import { DARK_SECTION_BG, DARK_SUBTEXT } from './theme'

const TABS = [
  { id: 'hiring', anchor: 'before-after-hiring', number: '01', title: '採用が変わる' },
  { id: 'retention', anchor: 'before-after-retention', number: '02', title: '定着が変わる' },
  { id: 'organization', anchor: 'before-after-organization', number: '03', title: '組織が変わる' },
] as const

type TabId = (typeof TABS)[number]['id']

function tabIdFromHash(hash: string): TabId | null {
  const found = TABS.find((tab) => `#${tab.anchor}` === hash)
  return found?.id ?? null
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-1.5" role="list">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-white/85">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function BeforeAfterLabel({ variant }: { variant: 'before' | 'after' }) {
  return variant === 'before' ? (
    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
      BEFORE
    </span>
  ) : (
    <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0b1c33]">
      AFTER
    </span>
  )
}

function HiringPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="rounded-xl bg-white/5 p-5 sm:p-6">
        <BeforeAfterLabel variant="before" />
        <p className="mt-3 text-xs font-semibold text-white/50">添削前の求人票</p>
        <p className="mt-2 text-base font-bold text-white">配送ドライバー募集</p>
        <Bullets
          items={[
            '月給28万円〜',
            '未経験歓迎',
            '各種社会保険完備',
            '要普通自動車免許',
            'シフト制',
            '経験者優遇',
          ]}
        />
        <p className="mt-5 text-sm leading-relaxed text-white/70">
          条件は書いてある。でも、この会社で働く意味が伝わっていない。
        </p>
      </div>

      <div className="rounded-xl bg-white/10 p-5 sm:p-6">
        <BeforeAfterLabel variant="after" />
        <p className="mt-3 text-xs font-semibold text-white/50">SONOSAKIによる再設計</p>
        <p className="mt-2 text-lg font-bold leading-snug text-white">
          毎日、大切な人に「ただいま」を言えるドライバーへ。
        </p>
        <Bullets
          items={[
            '日帰り運行を中心とした勤務設計',
            '帰宅時間が予測しやすい配車',
            '子どもの行事に合わせた希望休',
            '未経験者への同乗研修',
            '家族にも説明できる安全管理',
          ]}
        />
        <p className="mt-5 text-sm leading-relaxed text-white">
          「ドライバーを募集しています」から、
          <br />
          「家族との時間を守りながら、誇りを持って働ける仕事です。」へ変える。
        </p>
      </div>
    </div>
  )
}

function RetentionPanel() {
  const perspectives = [
    { label: '特性', items: ['小さな変化によく気づく', '人の話を丁寧に聞ける', 'ミスや違和感を見つけられる', '安定して仕事を進められる'] },
    { label: '価値観', items: ['注目されることより、信頼されること', '誰かを支えること', '家族との時間を守ること'] },
    { label: '力を発揮しやすい環境', items: ['考える時間がある', '役割と期待が明確', '個別に意見を聞いてもらえる', '誰の役に立っているかが分かる'] },
    { label: '望む未来', items: ['管理職になりたいわけではない', '自分の技術で必要とされたい', '家族との時間を守りながら働きたい', '家族に誇れる仕事をしたい'] },
  ] as const

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="rounded-xl bg-white/5 p-5 sm:p-6">
        <BeforeAfterLabel variant="before" />
        <p className="mt-3 text-xs font-semibold text-white/50">表面的な評価</p>
        <Bullets items={['発言が少ない', '積極性がない', '管理職を目指していない', 'もっと前に出てほしい']} />
        <p className="mt-5 text-sm leading-relaxed text-white/70">
          会社から見ると、「意欲が低い社員」に見えている。
        </p>
      </div>

      <div className="rounded-xl bg-white/10 p-5 sm:p-6">
        <BeforeAfterLabel variant="after" />
        <p className="mt-3 text-xs font-semibold text-white/50">本人を4つの観点から理解する</p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {perspectives.map((p) => (
            <div key={p.label}>
              <p className="text-xs font-semibold text-white">{p.label}</p>
              <Bullets items={p.items} />
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs font-semibold text-white">仕事との接点</p>
        <Bullets
          items={['新人のフォロー', '顧客との継続的な関係づくり', 'ミスを防ぐ仕組みづくり', 'マニュアルや研修の整備', '現場と管理者をつなぐ役割']}
        />
        <p className="mt-5 text-sm leading-relaxed text-white">
          「発言が少ない社員」から、
          <br />
          「人の変化に気づき、チームを支えられる社員」へ見え方が変わる。
        </p>
      </div>
    </div>
  )
}

function OrganizationPanel() {
  const types = [
    { label: 'A｜判断が速い人', description: '変化を捉え、前へ進める' },
    { label: 'B｜慎重な人', description: 'リスクやミスを防ぎ、安全を守る' },
    { label: 'C｜人の変化に気づく人', description: '顧客の不安、新人の困りごと、チームの摩擦に気づく' },
    { label: 'D｜整理が得意な人', description: '手順やマニュアルを整え、再現できる状態をつくる' },
  ] as const

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="rounded-xl bg-white/5 p-5 sm:p-6">
        <BeforeAfterLabel variant="before" />
        <p className="mt-3 text-xs font-semibold text-white/50">同じタイプだけが評価される組織</p>
        <p className="mt-4 text-xs font-semibold text-white">評価されやすい人</p>
        <Bullets items={['発言が多い', '判断が速い', '売上が目立つ', 'リーダーシップを取る', '競争に強い']} />
        <p className="mt-4 text-xs font-semibold text-white">見落とされやすい力</p>
        <Bullets
          items={['リスクに気づく', '周囲を支える', '顧客の不安を察する', '技術を引き継ぐ', '関係をつくる', '仕組みを整える']}
        />
      </div>

      <div className="rounded-xl bg-white/10 p-5 sm:p-6">
        <BeforeAfterLabel variant="after" />
        <p className="mt-3 text-xs font-semibold text-white/50">違いが一つの目的につながる組織</p>
        <p className="mt-3 text-sm font-semibold text-white">
          共通の目的例：お客様へ、安全に、確実に届ける。
        </p>
        <div className="mt-4 space-y-3">
          {types.map((t) => (
            <div key={t.label} className="rounded-lg bg-white/10 px-4 py-3">
              <p className="text-xs font-bold text-white">{t.label}</p>
              <p className="mt-0.5 text-sm text-white/80">{t.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs font-semibold text-white">結果</p>
        <Bullets
          items={[
            '一人の優秀な社員だけに頼らない',
            '違う特性が組み合わさる',
            '一人ひとりが自分の役割の意味を理解できる',
            '同じ目的に向かって力を発揮できる',
          ]}
        />
      </div>
    </div>
  )
}

const PANEL_FOOTER: Record<TabId, string> = {
  hiring: '※支援イメージです。実際の求人では、その企業で実施している制度や働き方のみを掲載します。',
  retention: '人は、できないのではない。力の出し方が違う。',
  organization: '同じ人を増やすのではなく、違う人が力を合わせられる組織へ。',
}

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<TabId>('hiring')

  useEffect(() => {
    const applyHash = () => {
      const matched = tabIdFromHash(window.location.hash)
      if (matched) setActiveTab(matched)
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  return (
    <section id="before-after" className={`scroll-mt-20 ${DARK_SECTION_BG} py-20 sm:py-28`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            SONOSAKIによる3つの
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">BEFORE / AFTER</span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${DARK_SUBTEXT}`}>
            個人理解を土台にすると、採用・定着・組織はこう変わっていきます。
          </p>
        </div>

        {/* タブ切り替え（PC:横並び / SP:縦並び、横スクロールなし） */}
        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={tab.anchor}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`scroll-mt-24 rounded-xl border px-4 py-3 text-center transition-colors ${
                activeTab === tab.id
                  ? 'border-white bg-white/15 text-white'
                  : 'border-white/15 bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              <span className="block text-xs font-bold sm:inline sm:mr-2">{tab.number}</span>
              <span className="block text-sm font-semibold sm:inline">{tab.title}</span>
            </button>
          ))}
        </div>

        <div key={activeTab} className="mt-8 [animation:diagnosis-step-in_0.3s_ease-out]">
          {activeTab === 'hiring' && <HiringPanel />}
          {activeTab === 'retention' && <RetentionPanel />}
          {activeTab === 'organization' && <OrganizationPanel />}

          <p className="mt-6 text-center text-sm font-medium leading-relaxed text-white/70">
            {PANEL_FOOTER[activeTab]}
          </p>
        </div>
      </div>
    </section>
  )
}
