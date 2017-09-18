/**
* 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。
* Note: 这个方法用于代替 Array#slice 来确保数组正确返回。
*
* @param  {Array}  array              要裁剪数组
* @param  {Number} [start=0]          开始位置
* @param  {Number} [end=array.length] 结束位置
* @return {Array}                     返回 数组array 裁剪部分的新数组
* @example
*
* var array = [1, 2, 3, 4, 5];
*
* slice(array, 0, 2);
* // => [1, 2]
*/
function slice(array, start=0, end=array.length) {
  return array.slice(start, end);
}
