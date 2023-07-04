function truncate(str, max) {
    if (str.length > max) {
      return str.substring(0, max) + "...";
    } else {
      return str;
    }
  }
  console.log(truncate('This text will be truncated if it is too long', 25));
  // Output: This text will be truncat...
    

  function truncate(str, max) {
    return str.length > max ? str.substring(0, max) + "..." : str;
  }
  