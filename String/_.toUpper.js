/**
 * 转换整个string字符串的字符为大写。
 *
 * @param   {string} [string=''] 要转换的字符串
 * @returns {string}             返回大写的字符串
 * @example
 *
 * toUpper('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * toUpper('fooBar');
 * // => 'FOOBAR'
 *
 * toUpper('__foo_bar__');
 * // => '__FOO_BAR__'
 */

 function toUpper(string='') {
   return string.toUpperCase();
 }
