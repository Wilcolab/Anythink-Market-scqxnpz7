function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

// Example usage:
// console.log(camelCase("case Study")); // "caseStudy"
// console.log(camelCase("hello world test")); // "helloWorldTest"
// console.log(camelCase("PascalCase")); // "pascalcase"