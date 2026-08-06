'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/constants/site'
import {
  ANSWER_OPTIONS,
  ORG_DIAGNOSIS_QUESTIONS,
  scoreOrgDiagnosis,
  type OrgDiagnosisAnswer,
} from '@/data/orgDiagnosis'

const TOTAL_QUESTIONS = ORG_DIAGNOSIS_QUESTIONS.length

type Screen = number | 'result'

function IconLine() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

export function OrgDiagnosisSection() {
  const [screen, setScreen] = useState<Screen>(0)
  const [answers, setAnswers] = useState<OrgDiagnosisAnswer[]>([])

  function selectAnswer(answer: OrgDiagnosisAnswer) {
    if (typeof screen !== 'number') return
    const nextAnswers = [...answers, answer]
    setAnswers(nextAnswers)

    if (screen + 1 < TOTAL_QUESTIONS) {
      setScreen(screen + 1)
    } else {
      setScreen('result')
    }
  }

  function goBack() {
    if (screen === 'result') {
      setScreen(TOTAL_QUESTIONS - 1)
      return
    }
    if (typeof screen === 'number' && screen > 0) {
      setAnswers(answers.slice(0, -1))
      setScreen(screen - 1)
    }
  }

  function restart() {
    setScreen(0)
    setAnswers([])
  }

  const result = screen === 'result' ? scoreOrgDiagnosis(answers) : null
  const stepKey = screen === 'result' ? 'result' : `q-${screen}`
  const showBack = screen === 'result' || (typeof screen === 'number' && screen > 0)

  return (
    <section id="diagnosis" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {!result && (
          <div className="text-center">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              まず、現在の状況を教えてください。
            </h2>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              6つの質問に答えると、約1分で組織の課題と優先して見直すポイントがその場で分かります。
            </p>
          </div>
        )}

        <div className="mt-6 flex items-center gap-3">
          {showBack && (
            <button
              type="button"
              onClick={goBack}
              className="shrink-0 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900"
            >
              ← 前の質問へ戻る
            </button>
          )}
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#123524] transition-all duration-300"
              style={{
                width: `${(Math.min(typeof screen === 'number' ? screen + 1 : TOTAL_QUESTIONS, TOTAL_QUESTIONS) / TOTAL_QUESTIONS) * 100}%`,
              }}
            />
          </div>
          <span className="shrink-0 text-xs font-medium text-slate-500">
            {Math.min(typeof screen === 'number' ? screen + 1 : TOTAL_QUESTIONS, TOTAL_QUESTIONS)} / {TOTAL_QUESTIONS}
          </span>
        </div>

        <div key={stepKey} className="mt-8 [animation:diagnosis-step-in_0.3s_ease-out]">
          {typeof screen === 'number' && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
              <p className="text-center text-lg font-bold leading-relaxed text-slate-900 sm:text-xl">
                {ORG_DIAGNOSIS_QUESTIONS[screen].question}
              </p>
              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
                {ANSWER_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => selectAnswer(option.value)}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-center text-base font-semibold text-slate-900 transition-all hover:border-[#123524] hover:bg-[#123524]/5 active:scale-[0.98]"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
              <p className="text-center text-xs font-semibold text-[#123524] sm:text-sm">診断結果</p>
              <p className="mt-2 text-center text-xl font-bold text-slate-900 sm:text-2xl">
                「{result.resultType.label}」
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {result.resultType.possibility}
              </p>

              <div className="mt-7 rounded-xl bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">
                  【最初に見直すべきこと】
                </p>
                <ul className="mt-3 space-y-3" role="list">
                  {result.resultType.firstSteps.map((step, idx) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#123524] text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={result.resultType.beforeAfterAnchor}
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:border-[#123524]"
                >
                  関連するBEFORE / AFTERを見る
                </a>
                <Link
                  href={result.resultType.columnLink.href}
                  className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 transition-colors hover:border-[#123524]"
                >
                  {result.resultType.columnLink.label}
                </Link>
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href={SITE_CONFIG.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white transition-all hover:brightness-95 active:scale-[0.98]"
                >
                  <IconLine />
                  診断結果について相談する
                </a>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                回答内容を保存したり、外部に送信することはありません。
              </p>

              <button
                type="button"
                onClick={restart}
                className="mt-3 block w-full text-center text-xs font-medium text-slate-400 underline underline-offset-2 transition-colors hover:text-slate-600"
              >
                もう一度診断する
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
