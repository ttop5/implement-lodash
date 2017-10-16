/**
* 检查 value 是否为一个整数。
*
* 注意: 这个方法基于 Number.isInteger。
*
* @param  {*}  value  要检查的值
* @return {Boolean}   如果 value 是一个整数，那么返回 true，否则返回 false
* @example
*
* isInteger(3);
* // => true
*
* isInteger(Number.MIN_VALUE);
* // => false
*
* isInteger(Infinity);
* // => false
*
* isInteger('3');
* // => false
*/
function isInteger(value) {
  return Number.isInteger(value);
}
