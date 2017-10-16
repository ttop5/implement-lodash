/**
* 检查 value 是否是原始有限数值。
*
* ** 注意:** 这个方法基于 Number.isFinite。
*
* @param  {*}  value  要检查的值
* @return {Boolean}   如果 value 是一个有限数值，那么返回 true，否则返回 false
* @example
*
* isFinite(3);
* // => true
*
* isFinite(Number.MIN_VALUE);
* // => true
*
* isFinite(Infinity);
* // => false
*
* isFinite('3');
* // => false
*/
function isFinite(value) {
  return typeof(value) === 'number' && isFinite(value);
}
