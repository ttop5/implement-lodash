/**
* 根据 precision（精度） 向上舍入 number。（愚人码头注： precision（精度）可以理解为保留几位小数。）
*
* @param  {Number} number        要向上舍入的值
* @param  {Number} [precision=0] 向上舍入的的精度
* @return {Number}               返回向上舍入的值
* @example
*
* ceil(4.006);
* // => 5
*
* ceil(6.004, 2);
* // => 6.01
*
* ceil(6040, -2);
* // => 6100

*/
function ceil(number, precision=0) {
  const multiple = Math.pow(10, precision);
  return Math.ceil(number * multiple) / multiple;
}
