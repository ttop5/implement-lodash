/**
* 将 array 中的所有元素转换为由 separator 分隔的字符串。
*
* @param  {Array}  array     要转换的数组
* @param  {String} separator 分隔元素
* @return {String}           返回连接字符串
* @example
*
* join(['a', 'b', 'c'], '~');
* // => 'a~b~c'
*/
function join(array, separator=',') {
  return array.join(separator);
}
