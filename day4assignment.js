// Declare a global variable browser and assign it the value "Chrome". 
let browser="chrome";
//Create a function named checkBrowserVersion that accepts a callback function as an
//argument:
function checkbrowserversion(callback) {
    // Use setTimeout to simulate a delay (like waiting for data from a server).
//fter the delay (2 seconds), invoke the callback function and pass the browser value to it. 
setTimeout(function()
{
    callback(browser);
},2000);
}
  function logversion(version){
    console.log("browser version using callback"+version)


  } 
  checkbrowserversion(logversion);
