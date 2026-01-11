function toCamelCase(str) {
  // Replace separators (spaces, underscores, hyphens) with spaces
  const words = str.replace(/[\s_-]+/g, ' ').split(' ');

  // Process each word: lowercase, and capitalize subsequent words
  return words.map((word, index) => {
    const lowerWord = word.toLowerCase();
    if (index === 0) {
      return lowerWord;
    } else {
      return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }
  }).join('');
}

// Examples:
// console.log(toCamelCase("first name")); // "firstName"
// console.log(toCamelCase("user_id")); // "userId"
// console.log(toCamelCase("SCREEN_NAME")); // "screenName"
// console.log(toCamelCase("mobile-number")); // "mobileNumber"