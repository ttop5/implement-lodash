/**
 * 检查 n 是否在 start 与 end 之间，但不包括 end。 如果 end 没有指定，那么 start 设置为0。 如果 start 大于 end，那么参数会交换以便支持负范围。
 *
 * @param  {Number} number    要检查的值
 * @param  {Number} [start=0] 开始范围
 * @param  {Number} end       结束范围
 * @return {Boolean}          如果number在范围内 ，那么返回true，否则返回 false
 * @example
 *
 * inRange(3, 2, 4);
 * // => true
 *
 * inRange(4, 8);
 * // => true
 *
 * inRange(4, 2);
 * // => false
 *
 * inRange(2, 2);
 * // => false
 *
 * inRange(1.2, 2);
 * // => true
 *
 * inRange(5.2, 4);
 * // => false
 *
 * inRange(-3, -2, -6);
 * // => true
 */

 function inRange(number, start=0, end) {
   if (end) {
     if (start > end) {
       [start, end] = [end, start];
     }
     return ((number > start) && (number < end));
   }
   return ((number > 0) && (number < start));
 }
