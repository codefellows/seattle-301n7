'use strict';

const nums = [5,5,10,11,42,7];

const sum = nums.reduce((acc, num) => {
  return acc + num;  
});

console.log(sum);

const doctors = require('./doctors');

const nameNumber = doctors.reduce((acc, doc) => {
  acc[doc.actor] = doc.number; 
  return acc;
}, {});

console.log(nameNumber);
