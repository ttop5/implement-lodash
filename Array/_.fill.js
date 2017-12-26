/**
 * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
 * Note: 这个方法会改变 array（愚人码头注：不是创建新数组）。
 *
 * @param  {Array}  array              要填充改变的数组
 * @param  {*}      value              填充给array的值
 * @param  {Number} [start=0]          开始位置（默认0）
 * @param  {Number} [end=array.length] 结束位置（默认array.length）
 * @return {Array}                     返回填充改变后的数组
 * @example
 *
 * var array = [1, 2, 3];
 *
 * fill(array, 'a');
 * console.log(array);
 * // => ['a', 'a', 'a']
 *
 * fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */

 function fill(array, value, start=0, end=array.length) {
   while(start < end) {
     array[start] = value;
     start++;
   }
   return array;
 }
