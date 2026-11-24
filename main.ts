import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "I asked my home assistant to record every sound in the house while I was away, and it logged a full week of perfect silence. " +
  "When I played the silence back at full volume, I heard my own breathing \u2014 and it was coming from inside the closet.";

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, STORY);
