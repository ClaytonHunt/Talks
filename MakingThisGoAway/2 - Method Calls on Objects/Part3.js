// What about if we take it from obj and call it directly?
obj.fn = function() {
  'use strict';
  
  console.log(this);
};

var fn = obj.fn;

console.log();
obj.fn();

console.log();
fn();