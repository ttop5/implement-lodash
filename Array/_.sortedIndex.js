/**
 * 检索决定value值，应该插入到数组中尽可能小的索引位置，以保证array的排序。
 *
 * @param  {Array}  array 要检查的排序数组
 * @param  {Number} value 要评估的值
 * @return {Number}       返回 value值 应该在数组array中插入的索引位置 index
 * @example
 *
 * sortedIndex([30, 50], 40);
 * // => 1
 */

 function sortedIndex(array, value) {
   for (let i=0; i<array.length; i++) {
     if ((array[i] < value) && (array[i+1] >= value)) {
       return i + 1;
     }
   }
 }
