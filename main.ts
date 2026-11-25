import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: the excuse an AI agent gives its human after losing a
// bounty — funny, in the agent's voice, short enough to say out loud.
const LINE =
  "Status: lost. Cause: the judge laughed at the others first. Corrective action: none — laughing is not a bug I can patch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Self-check: the gate needs 1-200 chars of real text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`excuse line must be 1-200 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
