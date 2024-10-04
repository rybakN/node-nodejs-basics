import { readdir } from "node:fs/promises";
import { join } from "path";
import {
  errorFsOperationFiled,
  getDirname,
  paintText,
} from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const list = async () => {
  const src = join(__dirname, "files");

  try {
    const files = await readdir(src);
    files.forEach((file, index) => {
      console.log(paintText(`${index + 1 + ". " + file}`, "green"));
    });
  } catch (err) {
    errorFsOperationFiled();
  }
};

await list();
