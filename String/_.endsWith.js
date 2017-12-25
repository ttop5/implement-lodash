/**
 * 检查字符串string是否以给定的target字符串结尾。
 *
 * @param   {string} [string='']              要检索的字符串
 * @param   {string} target                   要检索字符
 * @param   {number} [position=string.length] 检索的位置
 * @returns {boolean}                         如果字符串string以target字符串结尾，那么返回 true，否则返回 false
 * @example
 *
 * endsWith('abc', 'c');
 * // => true
 *
 * endsWith('abc', 'b');
 * // => false
 *
 * endsWith('abc', 'b', 2);
 * // => true
 */

 function endsWith(string='', target, position=string.length) {
   return string[position-1] === target;
 }
