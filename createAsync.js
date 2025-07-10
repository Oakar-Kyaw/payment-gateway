module.exports = function createAsync(generatorFunction) {
  return function asyncCallAble(...args) {
    const generator = generatorFunction(...args);
    console.log("generator:", generator);
    let request = false
    function cancel() {
      request = true;
      console.log("cancelled");
    }
    const promise = new Promise((resolve, reject) => {
      async function nextYield(prevResult){
        if(prevResult.done){
            return resolve(prevResult.value)
        }
        try{
            console.log("d", generator.next(await prevResult.value));
            nextYield(generator.next(await prevResult.value));
        }catch(e){

        }
      }
      nextYield({})

    })
    return { promise: promise, cancel: cancel };
  };
};