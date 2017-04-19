var Constr = function(value) {
  this.value = value
};

Constr.prototype.all = [];

var i = 0;
while(i < 5) {
  Constr.prototype.all.push(new Constr(i))
  console.log(Constr.prototype.all);
  i++;
}
