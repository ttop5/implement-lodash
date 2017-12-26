/**
 * 检查 value 是否为有效的类数组长度。
 *
 * @param  {*}  value  要检查的值
 * @return {Boolean}   如果 value 是一个有效长度，那么返回 true，否则返回 false
 * @example
 *
 * isLength(3);
 * // => true
 *
 * isLength(Number.MIN_VALUE);
 * // => false
 *
 * isLength(Infinity);
 * // => false
 *
 * isLength('3');
 * // => false
 */

 function isLength(value) {
   return typeof value === 'number'
   && value > -1
   && value % 1 === 0
   && value <= Number.MAX_SAFE_INTEGER;
 }
