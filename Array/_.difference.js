/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。结果值的顺序是由第一个数组中的顺序确定。
 *
 * @param  {Array} array  要检查的数组
 * @param  {Array} values 排除的值
 * @return {Array}        返回一个过滤值后的新数组
 * @example
 *
 * difference([3, 2, 1], [4, 2]);
 * // => [3, 1]
 */

 function difference(array, values) {
   let result = [];
   array.map((item) => {
     if (!values.includes(item)) {
       result.push(item);
     }
   });
   return result;
 }
