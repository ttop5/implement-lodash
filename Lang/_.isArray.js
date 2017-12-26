/**
 * 检查 value 是否是 Array 类对象。
 *
 * @param  {*}  value  要检查的值
 * @return {Boolean}   如果value是一个数组返回 true，否则返回 false
 * @example
 *
 * isArray([1, 2, 3]);
 * // => true
 *
 * isArray(document.body.children);
 * // => false
 *
 * isArray('abc');
 * // => false
 *
 * isArray(_.noop);
 * // => false
 */

 // 方法1：
 function isArray(value) {
   return Array.isArray(value);
 }

 // 方法2：
 function isArray(value) {
   return (typeof(value) === 'object' && value.constructor === Array);
 }
