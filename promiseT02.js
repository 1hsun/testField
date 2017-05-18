
let x = true;
let y = true;
function taskA() {
  console.log("Task A");
  if(!x)
    throw new Error("taskA was called encore.")
}
function taskB() {
  x = false;
  console.log("Task B");
}
function taskC() {
  y = false;
}
function onRejected(error) {
    console.log(error);// => "throw Error @ Task A"
}
function finalTask() {
    console.log(y);
}

var promise = Promise.resolve();
promise
    .then(taskA)
    .then(taskB)
	.then(taskA)
    .catch(onRejected)
    .then(finalTask);