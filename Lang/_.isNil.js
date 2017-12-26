/**
 * 检查 value 是否是 null 或者 undefined。
 *
 * @param   {*}  value 要检查的值
 * @returns {boolean}  如果 value 为null 或 undefined，那么返回 true，否则返回 false
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(void 0);
 * // => true
 *
 * isNil(NaN);
 * // => false
 */

 function isNil(value) {
   return value === null || value === undefined;
 }
