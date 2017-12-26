/**
 * 这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。
 *
 * @param  {Array}  array                      要搜索的数组
 * @param  {NUmber} value                      要搜索的值
 * @param  {Number} [fromIndex=array.length-1] 开始搜索的索引值
 * @return {Number}                            返回匹配值的索引值，否则返回 -1
 * @example
 *
 * lastIndexOf([1, 2, 1, 2], 2);
 * // => 3
 *
 * // Search from the `fromIndex`.
 * lastIndexOf([1, 2, 1, 2], 2, 2);
 * // => 1
 */

 function lastIndexOf(array, value, fromIndex=array.length-1) {
   return array.lastIndexOf(value, fromIndex);
 }
