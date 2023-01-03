'use strict';

const sum = (...args) => {
  let accum = 0;
  let i = 0;
  while (args[i]) {
    accum += args[i];
    i++;
  }
  return accum;
};

module.exports = { sum };
