/**
* 检查 value 是否是 DOM 对象。
*
* @param  {*}  value  待检查的值
* @return {Boolean}   如果 value 是一个DOM对象，那么返回 true，否则返回 false
* @example
*
* isElement(document.body);
* // => true
*
* isElement('<body>');
* // => false
*/
function isElement(value) {
  return (value instanceof HTMLElement);
}
