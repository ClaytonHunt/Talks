function example() {
  console.log('Raw Function Calls (Undecorated)');
  console.log('-------------------')
  console.log("Does 'this' equal the global?");
  console.log(this === global);
}

example();