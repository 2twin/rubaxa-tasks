/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
 function missing(values) {
  let sorted = values.sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] - sorted[i - 1] !== 1) {
          return sorted[i] - 1;
      }
  }
  if (sorted[0] !== 1 && sorted.length) return 1;
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined