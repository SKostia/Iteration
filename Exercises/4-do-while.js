'use strict';

const sum = (...args) => {
  let accum = 0;
  if (args.length === 0) return 0;
  let i = 0;
  do {
    accum += args[i];
    i++;
  } while (args[i]);
  return accum;

};

module.exports = { sum };
