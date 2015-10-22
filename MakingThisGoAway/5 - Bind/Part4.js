// Bind and Replace
function MyType() {
  this.name = 'Clayton Hunt';
  this.doStuff = this.doStuff.bind(this);
}

MyType.prototype.doStuff = function() {
  console.log('Hello, my name is: ' + this.name);
};

var myObj = new MyType();
var d = myObj.doStuff;
d();