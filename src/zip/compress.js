import fs from "node:fs";
import { join } from "node:path";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { getDirname, paintText } from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const compress = async () => {
  const srcRead = join(__dirname, "files", "fileToCompress.txt");
  const srcWrite = join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(srcRead);
  const writeStream = fs.createWriteStream(srcWrite);

  try {
    await pipeline(readStream, createGzip(), writeStream);
  } catch (err) {
    paintText(err.message);
  }
};

await compress();
