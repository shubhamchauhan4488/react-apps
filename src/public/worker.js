// Function to calculate the nth Fibonacci number
// Calculating Fibonacci numbers can be CPU-intensive for large values of n,
// making it a good candidate for offloading to a Web Worker.
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  self.onmessage = function(event) {
    const n = event.data;
    console.log(`Worker received: ${n}`);
    
    // Perform the intensive calculation
    const result = fibonacci(n);
    
    // Send the result back to the main thread
    self.postMessage(result);
  };
  