/**
 * 获取除了array数组第一个元素以外的全部元素。
 *
 * @param  {Array} array 要检索的数组
 * @return {Array}       返回array数组的切片（除了array数组第一个元素以外的全部元素）
 * @example
 *
 * tail([1, 2, 3]);
 * // => [2, 3]
 */

 function tail(array) {
   return array.slice(1,array.length);
 }
