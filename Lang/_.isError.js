/**
 * 检查 value 是否是 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, 或者 URIError对象。
 *
 * @param  {*}  value  待检查的值
 * @return {Boolean}   如果 value 是一个错误（Error）对象，那么返回 true，否则返回 false
 * @example
 *
 * isError(new Error);
 * // => true
 *
 * isError(Error);
 * // => false
 */

 function isError(value) {
   return (value instanceof Error);
 }
