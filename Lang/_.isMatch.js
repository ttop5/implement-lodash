/**
 * 执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。
 *
 * @param   {Object}  object 要检查的对象
 * @param   {Object}  source 属性值匹配的对象
 * @returns {boolean}        如果object匹配，那么返回 true，否则返回 false
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 *
 * isMatch(object, { 'b': 2 });
 * // => true
 *
 * isMatch(object, { 'b': 1 });
 * // => false
 */

 function isMatch(object, source) {
   const [oKeys, oValues] = [Object.keys(object), Object.values(object)];
   const [sKey, sValue] = [Object.keys(source)[0], Object.values(source)[0]];
   for (let i = 0; i < oKeys.length; i++) {
     console.log(oKeys[i], oValues[i])
     if (oKeys[i] === sKey && oValues[i] === sValue) {
       return true;
     }
   }
   return false;
 }
