/**
 * 根据separator 拆分字符串string。
 *
 * @param   {string}        [string=''] 要拆分的字符串
 * @param   {RegExp|string} separator   拆分的分隔符
 * @param   {number}        [limit]     限制结果的数量
 * @returns {Array}
 * @example
 *
 * _.split('a-b-c', '-', 2);
 * // => ['a', 'b']
 */

 function split(string, separator, limit) {
   return string.split(separator, limit);
 }
