import { fileURLToPath } from "url";
import { dirname } from "path";

export const getDirname = (url) => {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
};

export const paintText = (text, color) => {
  switch (color) {
    case "red":
      return `\x1b[31m${text}\x1b[0m`;
    case "green":
      return `\x1b[32m${text}\x1b[0m`;
    default:
      return text;
  }
};

export const errorFsOperationFiled = () => {
  throw Error(paintText("FS operation failed", "red"));
};
