//Explain what a callback function is and provide a simple example? 

function myCallback(data) {
    // Do something with the data.
  }
  function myOtherFunction(callback) {
    // Do some work.
    callback(data);
  }
  // Call myOtherFunction, passing in myCallback as the callback.
  myOtherFunction(myCallback);