const createAsync = require("./createAsync");
const { setTimeoutAsync } = require("./settimeout");


const asynccreate = createAsync(function* () {
    console.log("Async operation started");
    const result = yield setTimeoutAsync(1,1000)
    console.log("Async operation finished with result:", result);
})

const { promise, cancel } = asynccreate();

promise()
//console.log("promise:", promise);