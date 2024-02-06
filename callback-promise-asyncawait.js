// callback 
// Definition: A callback is a function passed as an argument to another function, and it is executed after the completion of a particular task.
// Use Case: Commonly used in asynchronous operations, such as handling events, making HTTP requests, or reading files.
function fetchData(callback) {
    setTimeout(() => {
      console.log('Data fetched successfully');
      callback();
    }, 5000);
  }
  
  function processData() {
    console.log('Data processed');
  }
  
//   fetchData(processData);
//  out-put    after 5 sec 
//  Data fetched successfully
// Data processed
//-------------------------------------------------------//

// Definition: A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.
// Use Case: Provides a cleaner and more structured way to handle asynchronous code compared to callbacks. It has states (pending, fulfilled, rejected) and allows chaining.
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Data fetched successfully');
        resolve('Data');
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data processed:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
//    output
    // Data fetched successfully
    // Data processed: Data/ output  


    // ------------------------------------Promise-----------------------------------
//     Definition: async functions return Promises, and the await keyword is used to pause the execution of an async function until the Promise is settled.
// Use Case: Simplifies the syntax for working with Promises. It makes asynchronous code look more like synchronous code, making it easier to read and write.
async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Data fetched successfully');
        resolve('Data');
      }, 2000);
    });
  }
  
  async function processData() {
    const data = await fetchData();
    console.log('Data processed:', data);
  }
  
  processData();
  
  //--------------------------------------------------------------
  //callbacks  hell 
  // The asynchronous function requires callbacks as a return parameter. When multiple asynchronous functions are chained together then callback hell situation comes up.
  getDataFromServer(function (data1) {
    processData(data1, function (data2) {
        processDataAgain(data2, function (data3) {
            // And it goes on...
            processDataOnceMore(data3, function (finalResult) {
                // Finally, after several nested callbacks
                console.log("Final Result:", finalResult);
            });
        });
    });
});
