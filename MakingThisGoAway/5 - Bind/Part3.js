// Permanently Overriding the Context
var myObj = {
  foo: "bar",
  doStuff: function() {
    console.log(this.foo);
  }
}

var boundStuff = myObj.doStuff.bind({
  foo: "something else"
});

myObj.doStuff = boundStuff;

boundStuff();
myObj.doStuff();