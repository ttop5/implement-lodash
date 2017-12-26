/**
 * 创建一个数组的深拷贝。
 *
 * @param  {Array} array 要拷贝的数组
 * @return {Array}       返回拷贝后的数组
 * @example
 *
 * var array1 = [1, 2, 3];
 * var array2 = arrayCloneDeep(array1);
 * console.log(array2 === array1);
 * // => false
 */

 function arrayCloneDeep(array) {
   return [...array];
 }
