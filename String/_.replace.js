/**
 * 替换string字符串中匹配的pattern为给定的replacement 。
 *
 * @param   {string}          [string='']   待替换的字符串
 * @param   {RegExp|string}   pattern       要匹配的内容
 * @param   {Function|string} replacement   替换的内容
 * @returns {string}                        返回替换后的字符串
 * @example
 *
 * replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */

function replace(string, pattern, replacement) {
  return string.replace(pattern, replacement);
}
