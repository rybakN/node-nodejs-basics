import { spawn } from "node:child_process";
import { getDirname } from "../common/helpers.js";
import { join } from "node:path";

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const src = join(__dirname, "files", "script.js");
  const cp = spawn("node", [src, ...args]);

  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);

  cp.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 5, 6, 7]);
