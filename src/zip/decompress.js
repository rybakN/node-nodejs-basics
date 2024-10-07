import fs from "node:fs";
import { join } from "node:path";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { getDirname, paintText } from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const decompress = async () => {
  const srcRead = join(__dirname, "files", "archive.gz");
  const srcWrite = join(__dirname, "files", "fileToCompress.txt");

  const readStream = fs.createReadStream(srcRead);
  const writeStream = fs.createWriteStream(srcWrite);

  try {
    await pipeline(readStream, createUnzip(), writeStream);
  } catch (err) {
    paintText(err.message);
  }
};

await decompress();
