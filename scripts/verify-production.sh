#!/usr/bin/env bash
# 本番公開後の検証をまとめて実行する。
# 使い方: scripts/verify-production.sh <slug1> [slug2] [slug3] ...
#
# 確認項目:
#   - トップページ・OGP画像・各記事URLが200であること
#   - canonical / og:url / og:image / twitter:image が https://www.sonosakigrowth.jp 基準であること
#   - localhostまたは非www URLが含まれないこと
#   - BlogPosting構造化データが記事固有の値になっていること
#   - sitemap.xmlに新規記事URLが含まれること
set -uo pipefail

BASE="https://www.sonosakigrowth.jp"
SLUGS=("$@")
FAIL=0

if [ ${#SLUGS[@]} -eq 0 ]; then
  echo "使い方: $0 <slug1> [slug2] [slug3] ..."
  exit 1
fi

check_status() {
  local url="$1"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  echo "  $url -> $code"
  if [ "$code" != "200" ]; then
    FAIL=1
  fi
}

echo "=== 1. HTTPステータス ==="
check_status "$BASE/"
check_status "$BASE/images/og/default.png"
for slug in "${SLUGS[@]}"; do
  check_status "$BASE/blog/$slug"
done

echo ""
echo "=== 2. canonical / og:url / og:image / twitter:image / localhost・非www残存 ==="
for slug in "${SLUGS[@]}"; do
  url="$BASE/blog/$slug"
  echo "-- $url --"
  HTML=$(curl -s "$url")
  echo "$HTML" | grep -oE '<link rel="canonical"[^>]*>|<meta property="og:url"[^>]*>|<meta property="og:image"[^>]*>|<meta name="twitter:image"[^>]*>'

  LOCAL_COUNT=$(echo "$HTML" | grep -c "localhost")
  NONWWW_COUNT=$(echo "$HTML" | grep -cE '"https?://sonosakigrowth\.jp')
  echo "  localhost: $LOCAL_COUNT / 非www: $NONWWW_COUNT"
  if [ "$LOCAL_COUNT" != "0" ] || [ "$NONWWW_COUNT" != "0" ]; then
    FAIL=1
  fi

  echo "$HTML" > "/tmp/verify-production-$slug.html"
done

echo ""
echo "=== 3. BlogPosting構造化データ ==="
for slug in "${SLUGS[@]}"; do
  echo "-- /blog/$slug --"
  python3 - "$slug" "/tmp/verify-production-$slug.html" "$BASE" <<'PYEOF'
import sys, re, json

slug, path, base = sys.argv[1], sys.argv[2], sys.argv[3]
html = open(path, encoding="utf-8").read()
expected_url = f"{base}/blog/{slug}"

found = False
for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
    data = json.loads(m.group(1))
    if data.get("@type") == "BlogPosting":
        found = True
        ok = data.get("url") == expected_url and data.get("mainEntityOfPage", {}).get("@id") == expected_url
        print(f"  url={data.get('url')}")
        print(f"  mainEntityOfPage={data.get('mainEntityOfPage')}")
        print(f"  headline={data.get('headline')}")
        print(f"  datePublished={data.get('datePublished')} dateModified={data.get('dateModified')}")
        print("  OK" if ok else "  NG: url/mainEntityOfPageが記事URLと一致しません")
        if not ok:
            sys.exit(1)
if not found:
    print("  NG: BlogPosting構造化データが見つかりません")
    sys.exit(1)
PYEOF
  if [ $? -ne 0 ]; then FAIL=1; fi
done

echo ""
echo "=== 4. sitemap.xml 新規URL確認 ==="
SITEMAP=$(curl -s "$BASE/sitemap.xml")
for slug in "${SLUGS[@]}"; do
  if echo "$SITEMAP" | grep -q "$BASE/blog/$slug"; then
    echo "  OK: $slug はsitemap.xmlに含まれる"
  else
    echo "  NG: $slug がsitemap.xmlに見つからない"
    FAIL=1
  fi
done

echo ""
if [ "$FAIL" -eq 0 ]; then
  echo "検証結果: すべて合格"
  exit 0
else
  echo "検証結果: 問題あり（上記のNG箇所を確認してください）"
  exit 1
fi
