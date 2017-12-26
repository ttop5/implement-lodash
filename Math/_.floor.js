/**
 * 根据 precision（精度） 向下舍入 number。（愚人码头注： precision（精度）可以理解为保留几位小数。）
 *
 * @param  {Number} number        要向下舍入的值
 * @param  {Number} [precision=0] 向下舍入的精度
 * @return {Number}               返回向下舍入的值
 * @example
 *
 * floor(4.006);
 * // => 4
 *
 * floor(0.046, 2);
 * // => 0.04
 *
 * floor(4060, -2);
 * // => 4000
 */

 function floor(number, precision=0) {
   const multiple = Math.pow(10, precision);
   return Math.floor(number * multiple) / multiple;
 }
