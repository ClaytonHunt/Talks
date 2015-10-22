function doStuff(b, c) {
  return this.a + b + c;
}

var myContext = { a: 1 };
var result = doStuff.apply(myContext, [2, 3]);

console.log(doStuff(2,3));
console.log(result);