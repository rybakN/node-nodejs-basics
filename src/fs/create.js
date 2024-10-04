import { access, appendFile, constants } from "fs";
import { join } from "path";
import {
  errorFsOperationFiled,
  getDirname,
  paintText,
} from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const create = async () => {
  const filePath = join(__dirname, "files", "fresh.txt");

  access(filePath, constants.F_OK, (err) => {
    if (!err) errorFsOperationFiled();
  });

  appendFile(filePath, "I am fresh and young", (err) => {
    if (err) throw err;
    console.log(paintText("File has been successfully created.", "green"));
  });
};

await create();
