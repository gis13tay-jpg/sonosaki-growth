# 「今日の記事3本」自動公開フロー

このドキュメントは、ユーザーが「今日の記事3本」または「今日の3記事」と入力したときに実行する公開フローを定義する。着手前に必ず `docs/column-writing-guide.md`（執筆思想・配分ルール・禁止事項）の内容に従うこと。このドキュメントはCLAUDE.mdから読み込まれるため、常に有効な指示として扱う。

## トリガー

ユーザーの発言に次のいずれかが含まれていたら、このフローを開始する（前後に他の文章が付いていてもよい）。

- 「今日の記事3本」
- 「今日の3記事」

## 実行ステップ

1. **現状確認**：`data/columns.ts`（既存記事）・`data/concerns.ts`・`data/industries.ts`・`docs/column-writing-guide.md`の「今後扱うテーマ」を確認し、直近のテーマ・検索意図・タイトル・結論と重複しない候補を洗い出す。
2. **配分決定**：原則、組織・コミュニケーション記事2本、集客記事1本。組織2本のうち可能な限り「具体的な悩みに答える記事1本」＋「SONOSAKI Growthの考え方を伝える記事1本」に分ける。
3. **確認1（候補提示・1回だけ）**：3本の候補をまとめて提示し、「この3本で執筆を進めますか？」と1回だけ尋ねる。承認を得るまで執筆に着手しない。表示内容は次のとおり。
   - タイトル
   - 主な検索キーワード
   - 検索意図
   - 想定読者
   - 記事の結論（結論の一文）
   - 既存記事との重複確認結果
4. **執筆**：承認後、3本を執筆する。各記事で以下を満たす。
   - `docs/column-writing-guide.md`の必須構成要素（結論→想定される状況→表面的な原因→本質的な原因→具体的な会話例→見逃しやすい言葉→管理職が確認するポイント／判断基準→明日からできる行動→FAQ→まとめ→CTA）
   - SEO/AEO/GEO/AIO/LLMO：検索意図に直接答えるタイトル・導入、見出し直下の簡潔な結論、定義・原因・具体例・改善方法・チェックリスト・FAQ、AIが引用しやすい簡潔な回答ブロック
   - `category`・`concerns`・`industries`・`tags`・`primaryKeyword`・`relatedKeywords`・`description`・`updatedAt`などのメタデータを設定
   - 関連記事・カテゴリ・悩み・業種への内部リンクは既存の`getRelatedColumns`等をそのまま利用する（新規実装しない）
   - 組織記事は組織支援LP（`/#diagnosis`）、集客記事は集客支援LP（`/customer-acquisition`）へのCTAを設定する
   - 下記「執筆思想」を必ず反映する
5. **検証**：`npm run build` / `npm run lint` を実行し、build出力（またはsitemap.xml）に新規3記事のURLが含まれることを確認する。
6. **安全確認**：`git diff` / `git status` を確認する。`.claude/`・一時ファイル・ログ・確認用スクリプト（`check*.js`等）・スクリーンショットはコミット対象に含めない。既存記事のURL変更や削除が発生していないことを確認する。
7. **確認2（公開前確認・1回だけ）**：次の内容をまとめて提示し、「commit・pushして公開しますか？」と1回だけ尋ねる。
   - 作成した3記事（タイトル・slug）
   - 変更ファイル一覧
   - build結果
   - lint結果
   - sitemap確認結果
   - git diff/statusの要約
8. **commit**：承認後、対象ファイルのみを明示的に`git add`する（`.claude/`等は除外）。コミットメッセージは `content: publish daily three articles YYYY-MM-DD`（YYYY-MM-DDは実行日）。
9. **push**：`git push origin main`
10. **Vercel確認**：`scripts/check-deploy.sh`（またはgh api経由の同等コマンド）でVercelのデプロイ状態が`success`になるまで確認する。
11. **本番確認**：`scripts/verify-production.sh <slug1> <slug2> <slug3>` で、公開完了の判定基準（下記）をすべて確認する。
12. **完了報告**：下記フォーマットで報告する。

## 確認は原則3回のみ

- **確認1**：候補3本提示 →「この3本で執筆を進めますか？」
- **確認2**：公開前サマリ →「commit・pushして公開しますか？」
- **確認3**：Vercelデプロイ確認に伴う権限確認が発生する場合のみ、まとめて1回。同じ種類の安全な読み取りコマンドについて、個別に何度も確認しない。

上記以外の場面では、ユーザーに追加の確認を挟まない。

## 承認をまとめるルール

同じ目的のコマンドは可能な限り一つにまとめて実行する。以下は安全な繰り返し確認コマンドとして扱い、`.claude/settings.local.json`の`permissions.allow`で許可済みである。

- `node *`
- `curl -s https://www.sonosakigrowth.jp/*`
- `npm run build`
- `npm run lint`
- `git status` / `git diff` / `git log` / `git show`

ただし、次は省略せず必ず確認2を経てから実行する。

- `git commit` / `git push`
- 既存記事のURL変更
- 既存記事の削除
- 大量の既存ファイル変更

## 公開完了の判定

**pushしただけで完了にしない。** 次をすべて確認してから完了報告する。

- Vercel deployment: `success`
- 新規3記事の本番URL: 200
- canonical: `https://www.sonosakigrowth.jp`基準
- og:url: 記事自身のURL
- og:image / twitter:image: 取得可能（200）
- BlogPosting構造化データ: 記事固有の値（url / headline / description / datePublished / dateModified）
- sitemap.xml: 新規3URLを含む
- localhostまたは非www URL: 0件

## 完了報告フォーマット

```
■ 公開記事
1. タイトル
   URL
   主なキーワード
   組織／集客の区分

2. タイトル
   URL
   主なキーワード
   組織／集客の区分

3. タイトル
   URL
   主なキーワード
   組織／集客の区分

■ 検証結果
- build
- lint
- sitemap
- canonical／OGP／構造化データ
- 本番HTTPステータス
- commit hash
- push結果
- Vercel deployment
```

## 執筆思想（`docs/column-writing-guide.md`の要点・厳守）

一般論の量産ではなく、テーマに応じて次の視点を反映する。

- 言葉の向こう側にある本音
- 繰り返される言葉
- 「だけ」「しか」などの限定表現
- 「信用」と「信頼」など、似た言葉の選択理由
- 本人の特性、価値観、前提条件
- この会社にいる意味
- 人としての成長と会社への貢献の接続

### 禁止事項

- 根拠のない数値・実績・心理判断を作らない
- 「発言の9割は建前」のような、根拠のない割合を事実として断定しない
- 同じ比喩や結論を毎回使い回さない（例：「年収3,000万円だから結婚してください」のたとえは、記事の文脈に合う場合だけ使用する）
- 検索キーワードを不自然に繰り返さない
