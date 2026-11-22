// News-image entry for Saturday 21 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file, drawn from stories.json;
// the program copies it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_NAME = 'entry.png';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, IMAGE_NAME);
const SOURCE_FILE = join(dirname(fileURLToPath(import.meta.url)), IMAGE_NAME);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, readFileSync(SOURCE_FILE));
