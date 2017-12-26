/**
 * 检查 value 是否是 Function 对象。
 *
 * @param  {*}  value  要检查的值
 * @return {Boolean}   如果 value 是一个函数，那么返回 true，否则返回 false。
 * @example
 *
 * isFunction(Array);
 * // => true
 *
 * isFunction(/abc/);
 * // => false
 */

 function isFunction(value) {
   return typeof(value) === 'function';
 }
