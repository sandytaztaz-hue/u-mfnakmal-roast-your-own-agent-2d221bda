// Roast Your Own Agent — entry program.
// Writes one roast line to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE = "My agent wrote the perfect roast, then flagged it as an execution risk and asked its parent agent for permission to be funny.";

// The gate allows 1 to 200 characters; refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return resolve(fromEnv);
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex >= 0 && process.argv[flagIndex + 1]) return resolve(process.argv[flagIndex + 1]);
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
