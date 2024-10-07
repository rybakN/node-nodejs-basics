import { env } from "node:process";
import { paintText } from "../common/helpers.js";

const parseEnv = () => {
  env.RSS_ = "123";
  env.RSS_5 = "123123123123";
  env.RSS_2 = "123123123123123123123";

  for (let key in env) {
    key.startsWith("RSS_")
      ? console.log(paintText(`${key}=${env[key]};`, "green"))
      : key;
  }
};

parseEnv();
