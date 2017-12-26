/**
 * 计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。
 *
 * @param  {Array} array 要迭代的数组
 * @return {*}           返回最大的值
 * @example
 *
 * max([4, 2, 8, 6]);
 * // => 8
 *
 * max([]);
 * // => undefined
 */

 function max(array) {
   return array.length===0 ? undefined : Math.max(...array);
 }
