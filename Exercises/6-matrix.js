'use strict';

const max = (matrix) => {
  let res = NaN;
  for (const row of matrix) {
    for (const item of row) {
      res = (res >= item) ? res : item;
    }
  }
  return res;
  /////////////////////////////////////////////////////////////
};

module.exports = { max };
