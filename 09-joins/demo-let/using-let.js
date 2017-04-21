'use strict';

for(let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 10);
}

console.log('from outside the for loop: ' + i);
