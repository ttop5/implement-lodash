/**
 * 计算 array 中值的总和。
 *
 * @param  {Array}  array 要迭代的数组
 * @return {Number}       返回总和
 * @example
 *
 * sum([4, 2, 8, 6]);
 * // => 20
 */

 function sum(array) {
   return eval(array.join('+'));
 }
