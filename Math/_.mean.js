/**
 * 计算 array 的平均值。
 *
 * @param  {Array}  array 要迭代的数组
 * @return {Number}       返回平均值
 * @example
 *
 * mean([4, 2, 8, 6]);
 * // => 5
 */

 function mean(array) {
   return eval(array.join('+'))/array.length;
 }
