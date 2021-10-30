const { WorkerData, parentPort } = require("worker_threads");

const doWork = () => {
  let counter = 0;

  while (counter < 1e9) {
    counter++;
  }

  return counter;
};

parentPort.postMessage(doWork());