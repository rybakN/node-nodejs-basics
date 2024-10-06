import { argv } from "node:process";
import { paintText } from "../common/helpers.js";

const parseArgs = () => {
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      console.log(paintText(`${argv[i]} is ${argv[i + 1]}`, "green"));
    }
  }
};

parseArgs();
