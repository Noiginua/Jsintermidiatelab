// a) Using forEach loop and conditional operator
function camelCase(cssProp) {
    const words = cssProp.split('-');
    let camelCased = '';
  
    words.forEach((word, index) => {
      camelCased += index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    });
  
    return camelCased;
  }
  
  // b) Using a regular for loop and conditional operator
  function camelCaseForLoop(cssProp) {
    const words = cssProp.split('-');
    let camelCased = '';
  
    for (let i = 0; i < words.length; i++) {
      camelCased += i === 0 ? words[i] : words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return camelCased;
  }
  
  // c) Using a regular for loop and if-else statement
  function camelCaseForLoopIfElse(cssProp) {
    const words = cssProp.split('-');
    let camelCased = '';
  
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        camelCased += words[i];
      } else {
        camelCased += words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
  
    return camelCased;
  }
  
  console.log(camelCase('margin-left')); // Output: marginLeft
  console.log(camelCase('background-image')); // Output: backgroundImage
  console.log(camelCase('display')); // Output: display
  
  console.log(camelCaseForLoop('margin-left')); // Output: marginLeft
  console.log(camelCaseForLoop('background-image')); // Output: backgroundImage
  console.log(camelCaseForLoop('display')); // Output: display
  
  console.log(camelCaseForLoopIfElse('margin-left')); // Output: marginLeft
  console.log(camelCaseForLoopIfElse('background-image')); // Output: backgroundImage
  console.log(camelCaseForLoopIfElse('display')); // Output: display
  