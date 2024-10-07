import { cpus } from "node:os";
import { join } from "node:path";
import { Worker } from "node:worker_threads";
import { getDirname } from "../common/helpers.js";

const __dirname = getDirname(import.meta.url);

const performCalculations = async () => {
  const pathToWorker = join(__dirname, "worker.js");
  const coreCount = cpus().length;
  const workers = [];
  for (let i = 0; i < coreCount; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(pathToWorker);
        worker.postMessage({ n: 10 + i });
        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0) {
            reject();
          }
        });
      }),
    );
  }
  const result = await Promise.allSettled(workers);
  console.log(
    result.map((worker) => {
      return worker.status === "fulfilled"
        ? { status: "resolved", data: worker.value }
        : { status: "error", data: null };
    }),
  );
};

await performCalculations();
