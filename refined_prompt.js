/**
 * Converts a string to camelCase format.
 * Handles various input formats with spaces, underscores, and hyphens as delimiters.
 * If the string is already in camelCase, returns it unchanged.
 * Performs input validation and throws errors for invalid inputs.
 *
 * @param {string} str - The input string to convert. Must be a non-empty string without leading or consecutive delimiters.
 * @returns {string} The converted string in camelCase format (first word lowercase, subsequent words capitalized).
 * @throws {Error} Throws 'Invalid input: must be a string' if input is not a string.
 * @throws {Error} Throws 'Invalid input: cannot be null or undefined' if input is null or undefined.
 * @throws {Error} Throws 'Input must be a non-empty string' if input is an empty string.
 * @throws {Error} Throws 'String cannot start with a delimiter' if string starts with space, underscore, or hyphen.
 * @throws {Error} Throws 'String cannot have consecutive delimiters' if string has consecutive delimiters.
 *
 * @example
 * camelCase("Hey there"); // "heyThere"
 * camelCase("user_id"); // "userId"
 * camelCase("SCREEN_NAME"); // "screenName"
 * camelCase("mobile-number"); // "mobileNumber"
 * camelCase("heyThere"); // "heyThere" (already camelCase)
 * camelCase("hello"); // "hello" (single word)
 */
function camelCase(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('Invalid input: must be a string');
  }
  if (str === null || str === undefined) {
    throw new Error('Invalid input: cannot be null or undefined');
  }
  if (str.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Check for leading delimiter
  if (/^[\s_-]/.test(str)) {
    throw new Error('String cannot start with a delimiter');
  }

  // Check for consecutive delimiters
  if (/[\s_-]{2,}/.test(str)) {
    throw new Error('String cannot have consecutive delimiters');
  }

  // Check if already camelCase (starts with lowercase, followed by letters)
  if (/^[a-z][a-zA-Z]*$/.test(str)) {
    return str;
  }

  // Process conversion
  const words = str.replace(/[\s_-]+/g, ' ').split(' ');
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
// console.log(camelCase("Hey there")); // "heyThere"
// console.log(camelCase("user_id")); // "userId"
// console.log(camelCase("SCREEN_NAME")); // "screenName"
// console.log(camelCase("mobile-number")); // "mobileNumber"
// console.log(camelCase("heyThere")); // "heyThere" (already camelCase)
// console.log(camelCase("hello")); // "hello" (single word)
// camelCase(23); // throws Error
// camelCase(null); // throws Error
// camelCase(" hello"); // throws Error
// camelCase("hello  world"); // throws Error

/**
 * Converts a string to dot.case format.
 * Replaces delimiters (spaces, underscores, hyphens) with dots and converts to lowercase.
 * Performs input validation and throws errors for invalid inputs.
 *
 * @param {string} str - The input string to convert. Must be a non-empty string without leading or consecutive delimiters.
 * @returns {string} The converted string in dot.case format (lowercase with dots as separators).
 * @throws {Error} Throws 'Invalid input: must be a string' if input is not a string.
 * @throws {Error} Throws 'Invalid input: cannot be null or undefined' if input is null or undefined.
 * @throws {Error} Throws 'Input must be a non-empty string' if input is an empty string.
 * @throws {Error} Throws 'String cannot start with a delimiter' if string starts with space, underscore, or hyphen.
 * @throws {Error} Throws 'String cannot have consecutive delimiters' if string has consecutive delimiters.
 *
 * @example
 * toDotCase("hello world"); // "hello.world"
 * toDotCase("user_id"); // "user.id"
 * toDotCase("SCREEN_NAME"); // "screen.name"
 * toDotCase("mobile-number"); // "mobile.number"
 */
function toDotCase(str) {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('Invalid input: must be a string');
  }
  if (str === null || str === undefined) {
    throw new Error('Invalid input: cannot be null or undefined');
  }
  if (str.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Check for leading delimiter
  if (/^[\s_-]/.test(str)) {
    throw new Error('String cannot start with a delimiter');
  }

  // Check for consecutive delimiters
  if (/[\s_-]{2,}/.test(str)) {
    throw new Error('String cannot have consecutive delimiters');
  }

  // Process conversion to dot case
  return str
    .replace(/[\s_-]+/g, '.') // Replace separators with dots
    .toLowerCase(); // Convert to lowercase
}

// Examples:
// console.log(toDotCase("hello world")); // "hello.world"
// console.log(toDotCase("user_id")); // "user.id"
// console.log(toDotCase("SCREEN_NAME")); // "screen.name"
// console.log(toDotCase("mobile-number")); // "mobile.number"
// toDotCase(23); // throws Error
// toDotCase(null); // throws Error
// toDotCase(" hello"); // throws Error
// toDotCase("hello  world"); // throws Error

/**
 * Converts a string to kebab-case format.
 * Replaces delimiters (spaces, underscores, dots) with hyphens and converts to lowercase.
 * Performs input validation and throws errors for invalid inputs.
 * Supports advanced options for customization.
 *
 * @param {string} str - The input string to convert. Must be a non-empty string without leading or consecutive delimiters.
 * @param {object} [options] - Optional configuration object.
 * @param {string} [options.separator='-'] - The separator to use instead of hyphen.
 * @param {string} [options.case='lower'] - The case to apply: 'lower', 'upper', or 'title'.
 * @returns {string} The converted string in kebab-case format (or custom separator/case).
 * @throws {Error} Throws 'Invalid input: must be a string' if input is not a string.
 * @throws {Error} Throws 'Invalid input: cannot be null or undefined' if input is null or undefined.
 * @throws {Error} Throws 'Input must be a non-empty string' if input is an empty string.
 * @throws {Error} Throws 'String cannot start with a delimiter' if string starts with space, underscore, dot, or hyphen.
 * @throws {Error} Throws 'String cannot have consecutive delimiters' if string has consecutive delimiters.
 * @throws {Error} Throws 'Invalid options: separator must be a single character' if separator is invalid.
 * @throws {Error} Throws 'Invalid options: case must be lower, upper, or title' if case is invalid.
 *
 * @example
 * kebabCase("hello world"); // "hello-world"
 * kebabCase("user_id"); // "user-id"
 * kebabCase("SCREEN_NAME"); // "screen-name"
 * kebabCase("mobile.number"); // "mobile-number"
 * kebabCase("heyThere", { separator: '_' }); // "hey_there"
 * kebabCase("hello world", { case: 'upper' }); // "HELLO-WORLD"
 * kebabCase("hello world", { case: 'title' }); // "Hello-World"
 */
function kebabCase(str, options = {}) {
  // Input validation
  if (typeof str !== 'string') {
    throw new Error('Invalid input: must be a string');
  }
  if (str === null || str === undefined) {
    throw new Error('Invalid input: cannot be null or undefined');
  }
  if (str.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Options validation
  const { separator = '-', case: caseOption = 'lower' } = options;
  if (typeof separator !== 'string' || separator.length !== 1) {
    throw new Error('Invalid options: separator must be a single character');
  }
  if (!['lower', 'upper', 'title'].includes(caseOption)) {
    throw new Error('Invalid options: case must be lower, upper, or title');
  }

  // Check for leading delimiter (include dot and hyphen)
  if (/^[\s_.-]/.test(str)) {
    throw new Error('String cannot start with a delimiter');
  }

  // Check for consecutive delimiters
  if (/[\s_.-]{2,}/.test(str)) {
    throw new Error('String cannot have consecutive delimiters');
  }

  // Process conversion
  let result = str.replace(/[\s_.-]+/g, separator);

  // Apply case
  switch (caseOption) {
    case 'lower':
      result = result.toLowerCase();
      break;
    case 'upper':
      result = result.toUpperCase();
      break;
    case 'title':
      result = result.replace(/\b\w/g, l => l.toUpperCase());
      break;
  }

  return result;
}

// Examples:
// console.log(kebabCase("hello world")); // "hello-world"
// console.log(kebabCase("user_id")); // "user-id"
// console.log(kebabCase("SCREEN_NAME")); // "screen-name"
// console.log(kebabCase("mobile.number")); // "mobile-number"
// console.log(kebabCase("heyThere", { separator: '_' })); // "hey_there"
// console.log(kebabCase("hello world", { case: 'upper' })); // "HELLO-WORLD"
// console.log(kebabCase("hello world", { case: 'title' })); // "Hello-World"
// kebabCase(23); // throws Error
// kebabCase(null); // throws Error
// kebabCase(" hello"); // throws Error
// kebabCase("hello  world"); // throws Error
// kebabCase("hello", { separator: '--' }); // throws Error
// kebabCase("hello", { case: 'invalid' }); // throws Error