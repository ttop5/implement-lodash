// 迭代器
function iteratorRight(start, end, step) {
  if (step === 0) {
    return [...Array(Math.abs(end - start))].map(_=>start);
  } else {
    let result = [];
    while (Math.abs(start) < Math.abs(end)) {
      result.unshift(start);
      start += step;
    }
    return result;
  }
}

/**
* 这个方法类似 _.range ， 除了它是降序生成值的。
*
* @param  {Number} start 开始的范围
* @param  {Number} end   结束的范围
* @param  {Number} step  范围的增量或者减量
* @return {Array}        返回范围内数字组成的新数组
* @example
*
* range(4);
* // => [0, 1, 2, 3]
*
* range(-4);
* // => [0, -1, -2, -3]
*
* range(1, 5);
* // => [1, 2, 3, 4]
*
* range(0, 20, 5);
* // => [0, 5, 10, 15]
*
* range(0, -4, -1);
* // => [0, -1, -2, -3]
*
* range(1, 4, 0);
* // => [1, 1, 1]
*
* range(0);
* // => []
*/
function rangeRight(start, end, step) {
  if ((end === undefined) && start < 0) {
    end = start;
    start = 0;
    step = -1;
  }
  if ((end === undefined) && start >= 0) {
    end = start;
    start = 0;
    step = 1;
  }
  if ((end !== undefined) && (step === undefined) && start < 0) {
    step = -1;
  }
  if ((end !== undefined) && (step === undefined) && start >= 0) {
    step = 1;
  }
  return iteratorRight(start, end, step);
}
