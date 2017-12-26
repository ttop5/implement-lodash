/**
 * 转换字符串string的首字母为小写。
 *
 * @param   {string} [string=''] 要转换的字符串
 * @returns {string}             返回转换后的字符串
 * @example
 *
 * lowerFirst('Fred');
 * // => 'fred'
 *
 * lowerFirst('FRED');
 * // => 'fRED'
 */

 function lowerFirst(string) {
   return string.replace(string[0], string[0].toLowerCase());
 }
