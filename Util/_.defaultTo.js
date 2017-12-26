/**
 * 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者 undefined，那么返回defaultValue默认值。
 *
 * @param  {*} value        要检查的值
 * @param  {*} defaultValue 默认值
 * @return {*}              返回 resolved 值
 * @example
 *
 * defaultTo(1, 10);
 * // => 1
 *
 * defaultTo(undefined, 10);
 * // => 10
 */

 function defaultTo(value, defaultValue) {
   return (value === null || value !== value) ? defaultValue : value;
 }
