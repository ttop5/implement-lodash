/**
 * 如果 value 不是数组, 那么强制转为数组。
 *
 * @param  {*} value 要处理的值
 * @return {Array}   返回转换后的数组
 * @example
 *
 * castArray(1);
 * // => [1]
 *
 * castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * castArray('abc');
 * // => ['abc']
 *
 * castArray(null);
 * // => [null]
 *
 * castArray(undefined);
 * // => [undefined]
 *
 * castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(castArray(array) === array);
 * // => true
 */

 function castArray(value) {
   if (value instanceof Array) {
     return value;
   }
   return new Array(value);
 }
