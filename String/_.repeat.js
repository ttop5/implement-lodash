/**
 * 重复 N 次给定字符串。
 *
 * @param   {string} [string=''] 要重复的字符串
 * @param   {number} [n=1]       重复的次数
 * @returns {string}             返回重复的字符串
 * @example
 *
 * repeat('*', 3);
 * // => '***'
 *
 * repeat('abc', 2);
 * // => 'abcabc'
 *
 * repeat('abc', 0);
 * // => ''
 */

function repeat(string='', n=1) {
 return string.repeat(n);
}
