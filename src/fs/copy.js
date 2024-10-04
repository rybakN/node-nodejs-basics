import { copyFile, mkdir, readdir } from "node:fs/promises";
import { join } from "path";
import {
  errorFsOperationFiled,
  getDirname,
  paintText,
} from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const src = join(__dirname, "files");
  const dest = join(__dirname, "files-copy");

  try {
    const files = await readdir(src);
    await mkdir(dest);
    await Promise.all(
      files.map(async (file) => {
        copyFile(src + "/" + file, dest + "/" + file);
      }),
    );
    console.log(paintText("Copy completed successfully", "green"));
  } catch (err) {
    errorFsOperationFiled();
  }
};

await copy();
