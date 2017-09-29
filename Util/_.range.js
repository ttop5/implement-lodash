// 迭代器
function iterator(start, end, step) {
  if (step === 0) {
    return [...Array(Math.abs(end - start))].map(_=>start);
  } else {
    let result = [];
    while (Math.abs(start) < Math.abs(end)) {
      result.push(start);
      start += step;
    }
    return result;
  }
}

/**
* 创建一个包含从 start 到 end，但不包含 end 本身范围数字的数组。 如果 start 是负数，而 end 或 step 没有指定，那么 step 从 -1 为开始。 如果 end 没有指定，start 设置为 0。 如果 end 小于 start ，会创建一个空数组，除非指定了 step。
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
function range(start, end, step) {
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
  return iterator(start, end, step);
}
