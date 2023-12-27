importScripts("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js");
   loadPyodide({
      fullStdLib: true,
      stdout: msg => console.log(`${msg}`)//consoleOutput.innerHTML += `${msg}<br>`,
    })
    .then(_pyodide => {
      console.log(`just now ${!!pyodide ? "overriding..." : "new"}`);
      pyodide = _pyodide;
    });
// onmessage = function(e) {
  
              
//   const result = e.data[0] * e.data[1];
//   if (isNaN(result)) {
//     postMessage('Please write two numbers');
//   } else {
//     const workerResult = 'Result: ' + result;
//     console.log('Worker: Posting message back to main script');
//     postMessage(workerResult);
//   }
// }
