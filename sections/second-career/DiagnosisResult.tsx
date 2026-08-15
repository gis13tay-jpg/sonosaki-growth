'use client'

import { useState } from 'react'
import { DIAGNOSIS_RESULT_TYPES, DIAGNOSIS_TYPE_ORDER, type DiagnosisTypeKey } from '@/data/secondCareerDiagnosis'

function TypeCard({ type }: { type: DiagnosisTypeKey }) {
  const result = DIAGNOSIS_RESULT_TYPES[type]
  return (
    <div className="rounded-2xl border border-[#123524]/15 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#123524] text-base font-bold text-white"
          aria-hidden="true"
        >
          {type}
        </span>
        <h3 className="text-xl font-bold text-[#123524]">{result.name}</h3>
      </div>
      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-sm font-bold text-[#c85220]">状態</dt>
          <dd className="mt-1 text-base leading-relaxed text-[#1f2a24]">「{result.state}」</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-[#c85220]">原因</dt>
          <dd className="mt-1 text-base leading-relaxed text-[#1f2a24]">{result.cause}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-[#c85220]">必要なこと</dt>
          <dd className="mt-1 text-base leading-relaxed text-[#1f2a24]">{result.need}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold text-[#c85220]">一人では整理しにくい理由</dt>
          <dd className="mt-1 text-base leading-relaxed text-[#1f2a24]">{result.whyHardAlone}</dd>
        </div>
      </dl>
    </div>
  )
}

export function DiagnosisResult({ types }: { types: DiagnosisTypeKey[] | null }) {
  const [browsedType, setBrowsedType] = useState<DiagnosisTypeKey | null>(null)

  const isPreview = types === null
  const displayed: DiagnosisTypeKey[] = browsedType ? [browsedType] : (types ?? ['A'])

  return (
    <div>
      {isPreview && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-[#3f4a44]">
          5つの質問に答えると、あなたの回答傾向に近いタイプがここに表示されます。まずは4つのタイプの例をご覧ください。
        </p>
      )}
      {!isPreview && types && types.length > 1 && !browsedType && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-[#3f4a44]">
          回答が同数だったため、2つのタイプを合わせた「複合タイプ」として表示しています。
        </p>
      )}

      <div className={`grid grid-cols-1 gap-6 ${displayed.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-2xl'}`}>
        {displayed.map((type) => (
          <TypeCard key={type} type={type} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <span className="text-sm font-medium text-[#3f4a44]">ほかのタイプを見る：</span>
        {DIAGNOSIS_TYPE_ORDER.map((type) => {
          const selected = displayed.length === 1 && displayed[0] === type
          return (
            <button
              key={type}
              type="button"
              aria-pressed={selected}
              onClick={() => setBrowsedType(type)}
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123524] focus-visible:ring-offset-2 ${
                selected
                  ? 'bg-[#123524] text-white'
                  : 'bg-white text-[#123524] ring-1 ring-inset ring-[#123524]/30 hover:bg-[#eaf3ee]'
              }`}
            >
              {type}：{DIAGNOSIS_RESULT_TYPES[type].name}
            </button>
          )
        })}
        {browsedType && (
          <button
            type="button"
            onClick={() => setBrowsedType(null)}
            className="min-h-11 rounded-full px-4 py-2 text-sm font-semibold text-[#3f4a44] underline underline-offset-4 hover:text-[#123524] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123524] focus-visible:ring-offset-2"
          >
            {isPreview ? '例の表示に戻る' : '診断結果に戻る'}
          </button>
        )}
      </div>
    </div>
  )
}
