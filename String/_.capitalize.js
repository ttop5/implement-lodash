/**
 * 转换字符串string首字母为大写，剩下为小写。
 *
 * @param   {string} [string=''] 要大写开头的字符串
 * @returns {string}             返回大写开头的字符串
 * @example
 *
 * capitalize('FRED');
 * // => 'Fred'
 */

 // 方法1：
 function capitalize(string='') {
   const strArr = string.toLowerCase().split('');
   strArr[0] = strArr[0].toUpperCase();
   return strArr.join('');
 }

 // 方法2：
 function capitalize(string='') {
   return string.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
 }
