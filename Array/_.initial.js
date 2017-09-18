/**
* 获取数组array中除了最后一个元素之外的所有元素（愚人码头注：去除数组array中的最后一个元素）。
*
* @param  {Array} array 要查询的数组
* @return {Array}       返回截取后的数组array
* @example
*
* initial([1, 2, 3]);
* // => [1, 2]
*/
function initial(array) {
  return array.slice(0, -1);
}
