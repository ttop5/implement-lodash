/**
 * 检查字符串string是否以 target 开头。
 *
 * @param   {string} [string='']  要检索的字符串
 * @param   {string} [target]     要检查的字符串
 * @param   {number} [position=0] 检索的位置
 * @returns {boolean}             如果string以 target，那么返回true，否则返回 false
 * @example
 *
 * startsWith('abc', 'a');
 * // => true
 *
 * startsWith('abc', 'b');
 * // => false
 *
 * startsWith('abc', 'b', 1);
 * // => true
 */

 function startsWith(string='', target, position=0) {
   return string[position] === target;
 }
