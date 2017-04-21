var i;
for(i = 0; i < 10; i++) {
  setTimeout(function() {console.log(i)}, 10);
}

console.log('from outside the for loop: ' + i);
console.log('first!');
