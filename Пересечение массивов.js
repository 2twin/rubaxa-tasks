/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
 function intersection(left, right) {
  const result = [];
  
  for (let num1 of left) {
      for (let num2 of right) {
          if (num1 === num2) {
              result.push(num1);
          }
      }
  }
  return result;
}

console.log(intersection(
[1, 2, 3, 4, 5],
[2, 8, 3]
));