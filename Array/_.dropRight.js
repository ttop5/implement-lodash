/**
* 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
*
* @param  {Array}  array [description]
* @param  {Number} [n=1] [description]
* @return {Array}        [description]
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
