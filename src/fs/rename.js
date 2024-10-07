import {
  errorFsOperationFiled,
  getDirname,
  paintText,
} from "../common/helpers.js";
import { join } from "path";
import { access, rename as fsRename } from "node:fs/promises";

const __dirname = getDirname(import.meta.url);

const rename = async () => {
  const src = join(__dirname, "files", "wrongFilename.txt");
  const dest = join(__dirname, "files", "properFilename.md");
  let isFileExist = true;

  try {
    isFileExist = await access(dest);
  } catch (err) {}

  if (!isFileExist) errorFsOperationFiled();

  try {
    await fsRename(src, dest);
    console.log(paintText("The file has been renamed successfully", "green"));
  } catch (err) {
    errorFsOperationFiled();
  }
};

await rename();
