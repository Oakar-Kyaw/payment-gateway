exports.setTimeoutAsync = function (callback, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
    //   console.log("Async", callback);
      resolve(callback);
    }, delay);
  });
};