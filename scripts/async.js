// Only using set time out makes it impossible to control the order of execution
///--was used in examples below Math.random()


// setTimeout(() => {
//   console.log("Hola");
// }, 2000)

// setTimeout(() => {
//   console.log("Adios");
// }, 4000)

// setTimeout(() => {
//   console.log("Que tal?");
// }, 3000)


// How to make things happen when we expect them to do?
// Promises 
/// then + catch (the original way to do it)
/// async > await (the improved way - to not have to keep track of all "then", "catch")


// Promise in JS = a promise object with a PromiseState and a PromiseResult
// Examples:


// [[PromiseState]] : "pending"
// [[PromiseResult]]: undefined
promise = new Promise((resolve, reject) => {

})
console.log(promise);


// [[PromiseState]] : "fulfilled"
// [[PromiseResult]]: "Success"
promise = new Promise((resolve, reject) => {
  resolve("Success")

})
console.log(promise);

// [[PromiseState]] : "rejected"
// [[PromiseResult]]: "Error"
promise = new Promise((resolve, reject) => {
  reject("Error")

})
console.log(promise);
// ----------------------

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.8 ) resolve("Promise fulfilled")
    else reject("Promise rejected")
  }, 2000)
})
console.log(promise);


setTimeout( () => {
  console.log(promise);
}, 2100)

// ----------------------

// Then Catch

/// Promise function
function promiseFunc(prob) {
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < prob ) resolve("Promise fulfilled")
      else reject("Promise rejected")
    }, 2000)
  })
}

promiseFunc(0.5).then(res => {
  console.log("%c" + res, "color: green");
})
.catch(err => {
  console.log("%c" + err, "color: red");
})

function randomPromise(time) {
  let delay = 1000*time*Math.random();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved in " + delay.toFixed(0)+ " ms")
    }, delay)
  })
}

randomPromise(2).then(res => {
  console.log("%c" + res, "color: green");
})

// ----------------------

// Async > await 
async function gestionarPromise() {
  let res
  console.log("I'm waiting for a promise"); 

  // Try catch
  try {
    res = await promiseFunc(0.5)
    console.log("The status has changed: " + res);
  }
  catch (error) {
    console.log("The promise has failed: " + error);
  }
}

gestionarPromise()
// throw new Error("Everything failed!")
// console.log("This line will not be executed");