import React, { useState, useEffect } from 'react';

function WebWorkerHome() {
  const [worker, setWorker] = useState(null);
  const [workerResult, setWorkerResult] = useState(null);
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    // Create a new Web Worker instance
    const newWorker = new Worker(new URL('../../public/worker.js', import.meta.url));
    setWorker(newWorker);

    // Handle messages received from the worker
    newWorker.onmessage = function(event) {
      setWorkerResult(event.data);
    };

    // Cleanup the worker when the component unmounts
    return () => {
      newWorker.terminate();
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handleStartWorker = () => {
    if (worker && Number.isInteger(inputValue) && inputValue >= 0) {
        // start the worker
      worker.postMessage(inputValue);
    }
  };

  return (
    <div>
      <h1>React Web Worker Example</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleStartWorker}>Start Worker</button>
      {workerResult !== null && <p>Worker Result: {workerResult}</p>}
    </div>
  );
}

export default WebWorkerHome;
