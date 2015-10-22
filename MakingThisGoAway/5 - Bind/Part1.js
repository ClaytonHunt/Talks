function doStuff(b, c) {
  console.log(this);
  return this.a + b + c;
}

var myContext = { a: 1 };
var boundStuff = doStuff.bind(myContext);

var result = boundStuff(2, 3);

console.log(doStuff(2,3));
console.log(result);