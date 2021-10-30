const { Worker } = require("worker_threads");

const runService = (WorkerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { WorkerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });
  });
};

(async () => {
  try {
    const result = await runService();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
