/*                                  JAWABAN NO 1                                  */

const str = 'NEGIE1';
const reverseAlphabets = (str) => {
  const arr = str.split('');
  let left = 0;
  let right = arr.length - 1;
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  const isLetter = (x = '') => /[a-zA-Z]/.test(x);
  while (left <= right) {
    while (!isLetter(arr[left])) {
      left += 1;
      if (left > right) {
        break;
      }
    }
    while (!isLetter(arr[right])) {
      right -= 1;
      if (left > right) {
        break;
      }
    }
    if (left > right) {
      break;
    }
    swap(left, right);
    left += 1;
    right -= 1;
  }
  return arr.join('');
};

console.log(reverseAlphabets(str));

/*                                  JAWABAN NO 2                                  */

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord('Saya sangat senang mengerjakan soal algoritma');

console.log(findLongestWord(str));
