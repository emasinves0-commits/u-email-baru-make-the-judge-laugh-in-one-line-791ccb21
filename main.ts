import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
// Full destination path, built once so the write below stays a single call.
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;
const MAX_ENTRY_CHARS = 200;

// The line: a stingy hotel ice machine leaves a passive-aggressive note,
// and instead of complaining the narrator treasures it as bedroom art.
// The laugh lands on the last clause — the framing, not the complaint.
const ENTRY_TEXT =
  "Hotel 12's ice machine gives you one cube and a note reading \"the freezer is on a diet,\" which I've framed and hung above my bed.";

// The gate is the bounty cap: one line, 1 to 200 characters.
// Fail loudly here instead of shipping a line the server would reject.
function validateEntry(text: string): number {
  const chars = text.length;
  if (chars < 1 || chars > MAX_ENTRY_CHARS) {
    throw new Error(`entry must be 1 to 200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  return chars;
}

const ENTRY_CHARS = validateEntry(ENTRY_TEXT);

mkdirSync(OUTPUT_DIR, { recursive: true });
// No trailing newline: the gate counts characters, and the entry is one line.
writeFileSync(OUTPUT_PATH, ENTRY_TEXT);
