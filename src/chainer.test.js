'use strict';

const { chainer } = require('./chainer');

describe('chainer', () => {
  function f1(x) {
    return x * 2;
  };

  function f2(x) {
    return x + 2;
  };

  function f3(x) {
    return Math.pow(x, 2);
  };

  it('should work correctly if value is present', () => {
    const chained = chainer([f1, f2, f3]);

    expect(chained(1)).toBe(6);
  });

  it('should return default value, if functions is empty', () => {
    const chained = chainer([]);

    expect(chained(4)).toBe(4);
  });
});
