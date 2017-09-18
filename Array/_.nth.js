/**
 * 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 *
 * @param  {Array}  array 要查询的数组
 * @param  {Number} [n=0] 要返回元素的索引值
 * @return {*}            获取array数组的第n个元素
 */
function nth(array, n=0) {
  return n<0 ? array[array.length+n] : array[n];
}
