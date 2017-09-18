/**
* 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
*
* @param  {Array}  array 要检索的数组
* @param  {Number} [n=1] 要提取的元素个数
* @return {Array}        返回 array 数组的切片（从结尾元素开始n个元素）
* @example
*
* takeRight([1, 2, 3]);
* // => [3]
*
* takeRight([1, 2, 3], 2);
* // => [2, 3]
*
* takeRight([1, 2, 3], 5);
* // => [1, 2, 3]
*
* takeRight([1, 2, 3], 0);
* // => []
*/
function takeRight(array, n=1) {
  return n===0 ? [] : array.slice(-n);
}
