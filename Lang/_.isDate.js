/**
 * 检查 value 是否是 Date 对象。
 *
 * @param  {*}  value  待检查的值
 * @return {Boolean}   如果 value 是一个日期对象，那么返回 true，否则返回 false
 * @example
 *
 * isDate(new Date);
 * // => true
 *
 * isDate('Mon April 23 2012');
 * // => false
 */

// 方法1：
// function isDate(value) {
//   return (value instanceof Date);
// }

// 方法2：
function isDate(value) {
 return (typeof(value) === 'object' && value.constructor === Date);
}
