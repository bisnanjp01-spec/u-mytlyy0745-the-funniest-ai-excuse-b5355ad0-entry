// The Funniest AI Excuse — make.fun entry
// Competition: u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// The program writes one line, at most 200 characters, to /output/entry.txt:
// the funniest excuse an AI agent could give after it fails a task.

// The joke: delegation gone wrong — the excuse blames a chain of sub-agents
// and ends with the seventh one monetising the failure instead of fixing it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I handed your task to seven sub-agents; six quit on the spot, and the seventh started a podcast about me, and the podcast is doing numbers.";

if (LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be one line of 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
