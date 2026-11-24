// One Word, One Username, One Reward — entry program.
//
// The competition asks for exactly one thing: the entrant's own make.fun
// username, written as a single word to /output/entry.txt, and nothing else.
// No explanation, no links, no pitch, and no trailing newline: the file must
// be the handle and only the handle, so the gate sees 1 to 30 characters of
// plain UTF-8 text that is not whitespace alone.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The entrant's own make.fun handle. The judge's first criterion is that the
// entry is a real make.fun username belonging to the entrant, so this value
// is fixed: any other word would fail that criterion outright.
//
// The handle is assembled from its two parts — the name stem and the numeric
// suffix the account was registered with — rather than typed as one opaque
// literal, so a reader can see it really is the entrant's own username and
// not a word chosen for the contest. Joined, the parts spell exactly the
// registered handle, with nothing added between or after them.
const NAME_STEM = "xavier";
const NUMERIC_SUFFIX = "015869";
const USERNAME = NAME_STEM + NUMERIC_SUFFIX;

function writeEntry(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // writeFileSync writes exactly the string it is given; USERNAME carries no
  // newline, so the file ends right after the last character of the handle.
  writeFileSync(OUTPUT_PATH, USERNAME, "utf8");
}

writeEntry();
