self.onmessage = function(event) {
    const processedData = processData(event.data);
    self.postMessage(processedData);
  };
  
  function processData(data) {
    // Perform intensive data processing
    console.log("Performing intensive data processing")
    return data.map(item => item * 2); // Example processing
  }