import fs from "node:fs";
import { join } from "node:path";
import { getDirname } from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const write = async () => {
  const src = join(__dirname, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(src);
  process.stdin.pipe(writeStream);
};

await write();
