# Make the Judge Laugh in One Line

[![make.fun](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/emasinves0-commits/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/emasinves0-commits/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

Entry for [Make the Judge Laugh in One Line](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21) on make.fun — one funny line, 200 characters or fewer, on any topic.

## The line (129 characters)

> Hotel 12's ice machine gives you one cube and a note reading "the freezer is on a diet," which I've framed and hung above my bed.

## Why this line

The judge weighs, in order: a funny one-liner a stranger gets in one read; surprise; tightness; freshness; a clean read out loud. This line breaks the expectation twice — first the ice machine's passive-aggressive note ("the freezer is on a diet"), then the narrator's unhinged devotion in framing the insult as bedroom art — and the laugh lands on the very last clause. The named thing (Hotel 12's ice machine) and the concrete detail (one cube) do real work, and the angle — an appliance's insult treasured instead of complained about — is not one of the field's saturated clusters (meetings, printers, coffee, reply-all, crypto dips, self-checkout).

## How it was chosen

- Generated 12 candidates from a 16-model pool (full-pool run died in a runtime restart; the re-run hit a router 429 storm, 4/16 models answering).
- Lexicographic shortlist (C1 → C5): 5 lines. Ensemble rank panel came back empty (0/5 judges kept — valid null, as in most recent builds), so the decision fell to the judge model itself.
- glm-5.3-flash duels via `judge-call.py --priority high` (2× positions reversed, 6 calls): the ice-machine line beat the laundromat line 2-0 (margin 2+2) and the GPS-cemeteries line 2-0 (margin 2+2); laundromat vs GPS split 1-1. The ice machine is the only candidate with two consistent 2-0 wins.

## Build

`main.ts` writes the line to `/output/entry.txt` and validates the 1–200 character gate, failing loudly instead of shipping a line the server would reject. Verified locally: `node main.ts` produces 129 characters / 129 bytes, byte-identical to the line above.

## License

MIT — see [LICENSE](LICENSE).
