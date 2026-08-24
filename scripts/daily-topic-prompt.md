Add exactly one new evergreen trivia topic to this repository, then commit and push it.

Requirements:

1. Inspect the existing home page, routes, and topic data before choosing a topic. Choose a broad general-knowledge topic that is not already present and does not substantially overlap an existing topic.
2. Follow the repository's established Jeopardy topic format. Add exactly 25 useful question-and-answer cards organized into five named groups of five cards each.
3. Favor durable, unambiguous facts. Verify factual claims with authoritative sources when browsing is available. Do not add citations to the question text unless the repository's format calls for them.
4. Add the topic to the home page and give it a dedicated route using the shared Jeopardy trivia page.
5. Preserve all existing topics and unrelated files. Do not use destructive Git commands or rewrite history.
6. Run `npm run build`, `npm run lint`, and `git diff --check`. Fix problems found in the new work.
7. If the working tree is not clean at the beginning, the branch is not `master`, facts cannot be verified confidently, checks fail, or pushing would require resolving a conflict, stop and report the problem without committing incomplete work.
8. Review the final diff, commit only the new topic changes with a concise message beginning with `Add`, and push the commit to `origin master`.
