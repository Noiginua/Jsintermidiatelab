const animals = ['Tiger', 'Giraffe'];

// a) Add 2 new values to the end
animals.push('Elephant', 'Lion');
console.log(animals); // Output: ['Tiger', 'Giraffe', 'Elephant', 'Lion']

// b) Add 2 new valuesa to the beginning
animals.unshift('Zebra', 'Monkey');
console.log(animals); // Output: ['Zebra', 'Monkey', 'Tiger', 'Giraffe', 'Elephant', 'Lion']


// c) Sort the values alphabetically
animals.sort();
console.log(animals); // Output: ['Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger', 'Zebra']

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Leopard');
console.log(animals); // Output: ['Elephant', 'Giraffe', 'Leopard', 'Monkey', 'Tiger', 'Zebra']

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
    const matchingAnimals = animals.filter(animal =>
      animal.toLowerCase().startsWith(beginsWith.toLowerCase())
    );
    return matchingAnimals;
  }
  
  console.log(findMatchingAnimals('G')); // Output: ['Giraffe']
  console.log(findMatchingAnimals('L')); // Output: ['Leopard', 'Lion']