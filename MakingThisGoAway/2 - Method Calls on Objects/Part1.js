var obj = {
  example: function(question) {
    console.log('Method Calls on Objects');
    console.log('-----------------------');
    console.log(question);
    console.log(this === obj);
  }
};

obj.example("Does 'this' equal obj?");