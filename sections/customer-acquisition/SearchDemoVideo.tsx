import fs from 'node:fs'
import path from 'node:path'
import { SearchDemoMedia } from './SearchDemoMedia'

function hasSearchDemoVideo() {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', 'videos', 'search-demo.mp4'))
  } catch {
    return false
  }
}

export function SearchDemoVideo() {
  const videoExists = hasSearchDemoVideo()

  return (
    <div className="mx-auto w-full max-w-[280px]">
      {/* スマートフォン風フレーム */}
      <div className="overflow-hidden rounded-[2.25rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        {/* ノッチ */}
        <div className="relative bg-slate-900 py-1.5">
          <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-700" />
        </div>

        <div className="relative aspect-[9/16] w-full overflow-hidden bg-white">
          <SearchDemoMedia videoExists={videoExists} />
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-muted-fg">
        ※ 検索画面のイメージです
      </p>
    </div>
  )
}
