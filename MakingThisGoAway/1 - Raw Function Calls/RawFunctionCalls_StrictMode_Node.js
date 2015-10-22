function example() {
  'use strict';
  console.log('Raw Function Calls (Strict Mode)');
  console.log('------------------')
  console.log("Does 'this' equal undefined?");
  console.log(this === undefined);
}

example();