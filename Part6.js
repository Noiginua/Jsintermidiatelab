function unique(duplicatesArray) {
  const uniqueArray = [];

  duplicatesArray.forEach(item => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });

  return uniqueArray;
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const randomArray = [1, 9, 8, 8, 2, 8, 0, 8, 1, 9, 8, 6, 9];

console.log(unique(colours)); // Output: [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // Output: [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(randomArray)); // Output: [ 1, 9, 8, 2, 0, 6 ]
