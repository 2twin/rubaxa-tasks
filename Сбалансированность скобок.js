/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
 function isBalanced(input) {
  let left = 0;
  let right = 0;
  const temp = input.split('');
  for (let char of temp) {
      if (char === '{') left ++;
      if (char === '}') right++;
  }
  return left === right;
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false