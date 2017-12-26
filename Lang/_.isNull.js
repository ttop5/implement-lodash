/**
 * 检查 valuealue 是否是 null。
 *
 * @param   {*}  value 要检查的值
 * @returns {boolean}  如果 value 为null，那么返回 true，否则返回 false
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(void 0);
 * // => false
 */

 function isNull(value) {
   return value === null;
 }
