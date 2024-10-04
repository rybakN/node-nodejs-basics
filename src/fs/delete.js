import { rm } from "node:fs/promises";
import { join } from "path";
import {
  errorFsOperationFiled,
  getDirname,
  paintText,
} from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  try {
    await rm(join(__dirname, "files", "fileToRemove.txt"));
    console.log(paintText("The file has been deleted successfully", "green"));
  } catch (e) {
    errorFsOperationFiled();
  }
};

await remove();
