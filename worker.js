const { parentPort, workerData } = require("worker_threads");

const doWork = ({ min, max }) => {
  let counter = min;

  while (counter < max) {
    counter++;
  }

  return counter;
};

parentPort.postMessage(doWork(workerData));
