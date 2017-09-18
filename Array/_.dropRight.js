/**
* 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
*
* @param  {Array}  array 要查询的数组
* @param  {Number} [n=1] 要去除的元素个数
* @return {Array}        返回array剩余切片
* @example
*
* _.dropRight([1, 2, 3]);
* // => [1, 2]
*
* _.dropRight([1, 2, 3], 2);
* // => [1]
*
* _.dropRight([1, 2, 3], 5);
* // => []
*
* _.dropRight([1, 2, 3], 0);
* // => [1, 2, 3]
*/
function dropRight(array, n=1) {
  return n===0 ? array.slice(0) : array.slice(0, -n);
}
