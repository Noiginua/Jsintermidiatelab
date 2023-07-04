function ucFirstLetters(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first character of the word
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  // Join the words back into a string
  const result = words.join(" ");

  return result;
}
console.log(ucFirstLetters("los angeles")); // Output: Los Angerles
console.log(ucFirstLetters("new york city")); //Output: New York City
console.log(ucFirstLetters("san francisco")); // output: San Francisco
