/**
 * 检查 value 是否是 NaN。
 *
 * @param   {*}  value 要检查的值
 * @returns {boolean}  如果 value 是一个 NaN，那么返回 true，否则返回 false
 * @example
 *
 * isNaN(NaN);
 * // => true
 *
 * isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => false
 */

 // 方法1:
 function isNaN(value) {
   return Number.isNaN(value);
 }

 // 方法2:
 function isNaN(value) {
   return value !== value;
 }
