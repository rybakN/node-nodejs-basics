import {
  errorFsOperationFiled,
  getDirname,
  paintText,
} from "../common/helpers.js";
import { join } from "path";
import { readFile } from "node:fs/promises";

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const src = join(__dirname, "files", "fileToRead.txt");

  try {
    const content = await readFile(src, { encoding: "utf8" });
    console.log(paintText(content, "green"));
  } catch (e) {
    errorFsOperationFiled();
  }
};

await read();
