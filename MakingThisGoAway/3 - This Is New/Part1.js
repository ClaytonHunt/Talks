var Example = function() {
  'use strict';
  
  this.value = "'new' is 'this'";
  console.log(this);
}

var e = new Example();
console.log(e.value);