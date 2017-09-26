/**
* 根据 precision（精度） 四舍五入 number。
*
* @param  {Number} number        要四舍五入的数字
* @param  {Number} [percision=0] 四舍五入的精度
* @return {Number}               返回四舍五入的数字
* @example
*
* round(4.006);
* // => 4
*
* round(4.006, 2);
* // => 4.01
*
* round(4060, -2);
* // => 4100
*/
function round(number, percision=0) {
  const multiple = Math.pow(10, percision);
  return Math.round(number * multiple) / multiple;
}
