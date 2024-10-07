import { pipeline, Transform } from "node:stream";
import { paintText } from "../common/helpers.js";

const transform = async () => {
  const reverseData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).split("").reverse().join(""));
    },
  });
  await pipeline(process.stdin, reverseData, process.stdout, (err) => {
    if (err) {
      paintText(`"Pipeline failed: "${err}`, "red");
    }
  });
};

await transform();
