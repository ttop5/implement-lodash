/**
 * 这个方法类似 _.uniq，除了它会优化排序数组。
 *
 * @param  {Array} array 要检查的数组
 * @return {Array}       返回一个不重复的排序数组
 * @example
 *
 * sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */

 function sortedUniq(array) {
   return [...new Set(array.sort())];
 }
