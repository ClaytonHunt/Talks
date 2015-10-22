// Brute Force
var myObj = {
  foo: "bar",
  doStuff: function() {
    console.log(this.foo);
  }
}

var boundStuff = myObj.doStuff.bind({
  foo: "something else"
});

boundStuff();
myObj.doStuff();