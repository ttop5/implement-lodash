/**
 * 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
 *
 * @param  {Array}  array         需要查找的数组
 * @param  {Number} value         需要查找的值
 * @param  {Number} [fromIndex=0] 开始查询的位置
 * @return {Number}               返回 值value在数组中的索引位置, 没有找到为返回-1
 * @example
 *
 * indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */

 function indexOf(array, value, fromIndex=0) {
   return array.indexOf(value, fromIndex);
 }
