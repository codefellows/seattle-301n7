'use strict';

const doctors = require('./doctors');

const even = doctors.filter(doctor => {
  return !(doctor.number % 2);
}).map(doctor => {
  return doctor.actor;
});

console.log(even);
