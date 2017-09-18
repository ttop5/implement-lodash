/**
* 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
*
* @param  {Array} array  要筛选的原数组
* @param  {Array} values 要移除值的数组
* @return {Array}        返回筛选后的数组
* @example
*
* var array = ['a', 'b', 'c', 'a', 'b', 'c'];
*
* pullAll(array, ['a', 'c']);
* // => ['b', 'b']
*/
function pullAll(array, values) {
  let result = [];
  array.map((item) => {
    if (!values.includes(item)) {
      result.push(item);
    }
  });
  return array=result;
}
