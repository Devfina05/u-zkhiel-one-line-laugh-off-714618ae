// One-Line Laugh-Off entry (Node 22, standard library only):
// writes exactly one funny line, at most 200 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the smart speaker stops being helpful and starts parenting —
// it sighs and tells its owner to look outside for the weather. The turn
// is the house itself getting fed up.
// Verified by running the program: the output is one line, 114 characters,
// inside the 1-to-200-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "I asked my smart speaker for the weather and it sighed, 'Look outside.' I think my house has started parenting me.",
);
