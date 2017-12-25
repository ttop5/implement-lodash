/**
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
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
