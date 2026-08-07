#!/usr/bin/env bash
# 指定コミット（省略時はHEAD）のVercelデプロイ状態をGitHubのコミットステータス経由でsuccess/failureになるまで確認する。
# 使い方: scripts/check-deploy.sh [commit-sha]
set -uo pipefail

SHA="${1:-$(git rev-parse HEAD)}"
REPO=$(git remote get-url origin | sed -E 's#.*github\.com[:/]##; s#\.git$##')

echo "repo=$REPO sha=$SHA"

for i in $(seq 1 30); do
  RESULT=$(gh api "repos/$REPO/commits/$SHA/status" 2>&1)
  STATE=$(echo "$RESULT" | grep -o '"state":"[a-z]*"' | head -1 | cut -d'"' -f4)
  echo "check $i: ${STATE:-unknown}"

  if [ "$STATE" = "success" ] || [ "$STATE" = "failure" ] || [ "$STATE" = "error" ]; then
    TARGET_URL=$(echo "$RESULT" | grep -o '"target_url":"[^"]*"' | head -1 | cut -d'"' -f4)
    echo "state=$STATE target_url=$TARGET_URL"
    if [ "$STATE" = "success" ]; then
      exit 0
    else
      exit 1
    fi
  fi
  sleep 10
done

echo "timeout: デプロイ状態がタイムアウトまでにsuccess/failureになりませんでした"
exit 2
