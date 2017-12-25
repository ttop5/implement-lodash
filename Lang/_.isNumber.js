/**
 * 检查 value 是否是原始Number数值型。
 *
 * @param   {*}  value 要检查的值
 * @returns {boolean}  检查 value 是否是原始Number数值型 或者 对象。
 * @example
 *
 * isNumber(3);
 * // => true
 *
 * isNumber(Number.MIN_VALUE);
 * // => true
 *
 * isNumber(Infinity);
 * // => true
 *
 * isNumber('3');
 * // => false
 */

 function isNumber(value) {
   return typeof(value) === 'number';
 }
