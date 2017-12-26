/**
 * 产生一个包括 lower 与 upper 之间的数。 如果只提供一个参数返回一个0到提供数之间的数。 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
 *
 * @param  {Number}  [lower=0]        下限
 * @param  {Number}  [upper=1]        上限
 * @param  {Boolean} [floating=false] 指定是否返回浮点数
 * @return {Number}                   返回随机数
 * @example
 *
 * random(0, 5);
 * // => an integer between 0 and 5
 *
 * random(5);
 * // => also an integer between 0 and 5
 *
 * random(0, 5, true);
 * // => a floating-point number between 0 and 5
 *
 * random(1.2, 5.2);
 * // => an integer number between 1.2 and 5.2
 */

 function random(lower=0, upper=1, floating=false) {
   const result =  Math.random() * (Math.floor(upper) - Math.floor(lower)) + lower;
   return floating ? result : Math.floor(result);
 }
