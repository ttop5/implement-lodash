/**
 * 检查 value 是否是 Map 对象。
 *
 * @param  {*}  value  要检查的值
 * @return {Boolean}   如果value是一个 Map 对象，返回 true，否则返回 false
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
 function isMap(value) {
   return value instanceof Map;
 }

 // 方法2：
 function isMap(value) {
   return (typeof(value) === 'object' && value.constructor === Map);
 }
