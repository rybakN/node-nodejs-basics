import { join } from "path";
import { getDirname } from "../common/helpers.js";
import { createReadStream } from "node:fs";

const { createHash } = await import("node:crypto");
const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
  const src = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");

  const input = createReadStream(src);

  input.on("readable", () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
