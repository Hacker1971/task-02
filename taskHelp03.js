// Step 1: Define a function myCallback that takes 'data' as a parameter.
function myCallback(data) {
    // Step 2: This is a placeholder function that doesn't do anything with the 'data' received.
    // In a real application, you would perform some specific action using the 'data'.
    // This function acts as a callback, meaning it will be called from another function with the 'data' passed to it.
  }
  
  // Step 3: Define another function myOtherFunction that takes 'callback' as a parameter.
  function myOtherFunction(callback) {
    // Step 4: This function does some work, but it also needs to call the 'callback' function at some point.
    // The 'callback' function will be provided as an argument when calling this function.
  
    // For demonstration purposes, let's create some sample data.
    const data = "Sample data";
    
    // Step 5: Call the 'callback' function, passing the 'data' to it.
    // This is where the 'myCallback' function is actually called, and 'data' is passed to it.
    callback(data);
  }
  
  // Step 6: Call myOtherFunction and pass myCallback as the callback.
  myOtherFunction(myCallback);
  