'use strict';

const doctors = require('./doctors');

const names = doctors.map(doctor => {
  return doctor.actor;
}).map(name => {
  return name + ' AWESOME!!!!!1111';
});

console.log(names);
