#!/bin/zsh

set -euo pipefail

readonly REPO_DIR="/Users/akhilivaturi/dev/trivial-studies"
readonly CODEX_BIN="/Users/akhilivaturi/.nvm/versions/node/v22.22.0/bin/codex"
readonly PROMPT_FILE="$REPO_DIR/scripts/daily-topic-prompt.md"
readonly LOCK_DIR="/tmp/trivial-studies-daily-topic.lock"

export PATH="/Users/akhilivaturi/.nvm/versions/node/v22.22.0/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

if ! /bin/mkdir "$LOCK_DIR" 2>/dev/null; then
  print "$(/bin/date '+%Y-%m-%dT%H:%M:%S%z') A daily topic run is already in progress; exiting."
  exit 0
fi

trap '/bin/rmdir "$LOCK_DIR"' EXIT

cd "$REPO_DIR"

print "$(/bin/date '+%Y-%m-%dT%H:%M:%S%z') Starting daily topic run."

if [[ "$(/usr/bin/git branch --show-current)" != "master" ]]; then
  print "Expected the master branch; exiting without changes."
  exit 1
fi

if [[ -n "$(/usr/bin/git status --porcelain)" ]]; then
  print "The repository has uncommitted changes; exiting without changes."
  exit 1
fi

/usr/bin/git pull --ff-only origin master

"$CODEX_BIN" exec \
  --approve-for-me \
  --sandbox workspace-write \
  --ephemeral \
  --color never \
  --cd "$REPO_DIR" \
  - < "$PROMPT_FILE"

print "$(/bin/date '+%Y-%m-%dT%H:%M:%S%z') Daily topic run finished."
