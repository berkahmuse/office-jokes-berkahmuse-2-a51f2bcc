// One-Line Office Jokes — entry for u-markk-st-one-line-office-jokes-a51f2bcc.
// Writes a single original one-line office joke to /output/entry.txt.
// Deterministic: no input, no network, no randomness — every run writes
// the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "Our team building exercise was trust falls, which is fitting, because I no longer trust anyone who schedules a 4:45 pm Friday meeting.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to ${outPath}`);
