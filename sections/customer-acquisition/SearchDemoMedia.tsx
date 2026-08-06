'use client'

import { useEffect, useState } from 'react'

const VIDEO_SRC = '/videos/search-demo.mp4'
const POSTER_SRC = '/videos/search-demo-poster.jpg'

function PlaceholderScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* 検索バー */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <svg className="h-4 w-4 shrink-0 text-muted-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <span className="text-sm text-muted-fg">近くの美容院</span>
      </div>

      {/* 結果カードのスケルトン */}
      <div className="flex-1 space-y-3 px-4 py-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
            <div className="h-10 w-10 shrink-0 rounded-md bg-surface" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 w-3/4 rounded bg-surface" />
              <div className="h-2 w-1/2 rounded bg-surface" />
            </div>
          </div>
        ))}
      </div>

      {/* AIチャット風の吹き出し */}
      <div className="border-t border-border bg-surface px-4 py-3">
        <div className="rounded-lg bg-white px-3 py-2 text-xs leading-relaxed text-muted-fg shadow-sm">
          このエリアでおすすめの美容院は…
        </div>
      </div>
    </div>
  )
}

export function SearchDemoMedia({ videoExists }: { videoExists: boolean }) {
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!videoExists) return

    // LCP・初期表示を優先するため、動画の読み込みはアイドルタイミングまで遅延させる
    const win = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    if (typeof win.requestIdleCallback === 'function') {
      const id = win.requestIdleCallback(() => setReady(true))
      return () => window.cancelIdleCallback?.(id)
    }
    const id = window.setTimeout(() => setReady(true), 300)
    return () => window.clearTimeout(id)
  }, [videoExists])

  const showVideo = videoExists && ready && !failed

  return (
    <>
      {videoExists && ready && (
        <video
          className={
            showVideo
              ? 'absolute inset-0 hidden h-full w-full object-cover motion-safe:block'
              : 'absolute inset-0 hidden h-full w-full object-cover'
          }
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          onError={() => setFailed(true)}
          aria-label="Googleマップ・Google検索・AI検索でお客様がお店や会社を探している様子のデモ動画"
        />
      )}

      <div className={showVideo ? 'absolute inset-0 motion-safe:hidden' : 'absolute inset-0'}>
        <PlaceholderScreen />
      </div>

      {!showVideo && (
        <span className="absolute right-2 top-2 rounded-full bg-slate-900/80 px-2.5 py-1 text-[10px] font-medium text-white">
          動画準備中
        </span>
      )}
    </>
  )
}
