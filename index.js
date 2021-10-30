const { Worker } = require("worker_threads");

const runService = (min, max) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData: { min, max } });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });
  });
};

(async () => {
  try {
    const result = await runService(0, 1e9);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
