/**
* 执行 SameValueZero 比较两者的值，来确定它们是否相等。
*
* @param  {*} value 要比较的值
* @param  {*} other 另一个要比较的值
* @return {Boolean} 如果两个值相等返回 true ，否则返回 false
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* eq(object, object);
* // => true
*
* eq(object, other);
* // => false
*
* eq('a', 'a');
* // => true
*
* eq('a', Object('a'));
* // => false
*
* eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
