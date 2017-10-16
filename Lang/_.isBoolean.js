/**
* 检查 value 是否是原始 boolean 类型。
*
* @param  {*}  value  要检查的值
* @return {Boolean}   如果 value 是一个布尔值，那么返回 true，否则返回 false
* @example
*
* isBoolean(false);
* // => true
*
* isBoolean(null);
* // => false
*/
function isBoolean(value) {
  return value === true || value === false;
}
