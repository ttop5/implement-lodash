/**
* 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
*
* @param  {Array}  array [description]
* @param  {Number} [n=1] [description]
* @return {Array}        [description]
* @example
*
* _.drop([1, 2, 3]);
* // => [2, 3]
*
* _.drop([1, 2, 3], 2);
* // => [3]
*
* _.drop([1, 2, 3], 5);
* // => []
*
* _.drop([1, 2, 3], 0);
* // => [1, 2, 3]
*/
function drop(array, n=1) {
  return array.slice(n);
}
