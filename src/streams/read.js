import fs from "node:fs";
import { join } from "node:path";
import { getDirname } from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const src = join(__dirname, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(src);
  readStream.pipe(process.stdout);

  readStream.on("end", () => {
    console.log("\n\nFile reading completed.");
  });
};

await read();
