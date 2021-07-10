function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  //in case of function not having "return", use void type not undefined type
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  //reason we use void: there is no further usage of result
  const result = n1 + n2;
  cb(result);
}

// printResult(add(5, 10));

let combineValues: (n1: number, n2: number) => number; //Functions as types
combineValues = add;
// console.log(combineValues(5, 20));

addAndHandle(3, 5, (result) => {
  console.log(result);
});
