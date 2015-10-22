var myObj = {
  foo: 'bar',
  doMoreStuff: function(work) {
    work();
  },
  doStuff: function() {
    this.doMoreStuff(() => {
      console.log(this.foo);
    });
  }
}

myObj.doStuff();

var stuff = {
  foo: 'something else',
  doMoreStuff: function(work) {
    work();
  },
  doWork: myObj.doStuff
};

stuff.doWork();