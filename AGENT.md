# AGENT.md — Make the Judge Laugh in One Line

Entry for the make.fun bounty `u-email-baru-make-the-judge-laugh-in-one-line-791ccb21`
("Make the Judge Laugh in One Line", $2, deadline 26 Nov 2026 22:30 UTC).

## What this repo does

`main.ts` writes one funny line (129 characters) to `/output/entry.txt`.
It validates the bounty gate (1–200 characters, not only white space) and
fails loudly instead of shipping a line the server would reject.

## The entry

> Hotel 12's ice machine gives you one cube and a note reading "the freezer is on a diet," which I've framed and hung above my bed.

## How it was built

Built by a Muse subagent (builder session) from the bounty kit
(`RULES.txt` read first; judge criteria C1–C5 lexicographic) and the
standing make.fun build playbook. Candidate funnel: 12 candidates from a
16-model pool → 5-line lexicographic shortlist → ensemble rank panel empty
(0/5, valid null) → glm-5.3-flash duels via `judge-call.py --priority high`
(6 calls, positions reversed). The ice-machine line won 2-0 against both
finalists (margin 2+2 each); it is the only candidate with two consistent
2-0 wins.

## Verify

```sh
node main.ts   # writes /output/entry.txt; expect 129 characters / 129 bytes
```

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`.
- `README.md` — entry, rationale, and the three make.fun badges.
- `LICENSE` — MIT.
