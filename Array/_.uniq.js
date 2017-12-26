/**
 * 数组去重
 *
 * @param  {Array} array 要检查的数组
 * @return {Array}       去重后的数组
 * @example
 *
 * uniq([2, 1, 2]);
 * // => [2, 1]
 */

 function uniq(array) {
   return [...new Set(array)];
 }
