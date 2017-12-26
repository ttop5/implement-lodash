/**
 * 转换整个string字符串的字符为小写。
 *
 * @param   {string} [string=''] 要转换的字符串
 * @returns {string}             返回小写的字符串
 * @example
 *
 * toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * toLower('fooBar');
 * // => 'foobar'
 *
 * toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */

 function toLower(string='') {
   return string.toLowerCase();
 }
