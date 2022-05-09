/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
 function rle(value) {
  let result = '';
  let count = 1;
  const arr = value.split('');
  arr.push(null);
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
          count++;
      } else {
          if (count !== 1) {
              result += arr[i-1] + count;                
          } else {
              result += arr[i-1];
          }
          count = 1;
      }
  }
  return result;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));