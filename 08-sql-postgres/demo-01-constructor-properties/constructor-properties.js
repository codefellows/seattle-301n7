var Constructor = function(opts) {
  this.value = opts.value;
};

Constructor.doSomething = function() {
  console.log('this is a property of the constructor function');
  console.log('value is: ' + this.value);
};

Constructor.prototype.doAnotherThing = function() {
  console.log(this.value);
};

var myObj = new Constructor({value: 'hello from data'});
myObj.doAnotherThing();

Constructor.doSomething();
