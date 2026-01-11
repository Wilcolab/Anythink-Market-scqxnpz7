/**
 * A class for chaining string case conversions.
 * Allows fluent API for converting strings between different case formats.
 * Each method modifies the internal string and returns the instance for chaining.
 */
class CaseConverter {
  /**
   * Creates a new CaseConverter instance.
   * @param {string} str - The initial string to convert.
   */
  constructor(str) {
    this.str = str;
  }

  /**
   * Converts the string to camelCase.
   * @returns {CaseConverter} The instance for chaining.
   */
  camelCase() {
    this.str = this._camelCase(this.str);
    return this;
  }

  /**
   * Converts the string to kebab-case.
   * @param {object} [options] - Options for customization.
   * @param {string} [options.separator='-'] - The separator to use.
   * @param {string} [options.case='lower'] - The case: 'lower', 'upper', 'title'.
   * @returns {CaseConverter} The instance for chaining.
   */
  kebabCase(options = {}) {
    this.str = this._kebabCase(this.str, options);
    return this;
  }

  /**
   * Converts the string to dot.case.
   * @returns {CaseConverter} The instance for chaining.
   */
  dotCase() {
    this.str = this._dotCase(this.str);
    return this;
  }

  /**
   * Converts the string to snake_case.
   * @returns {CaseConverter} The instance for chaining.
   */
  snakeCase() {
    this.str = this._snakeCase(this.str);
    return this;
  }

  /**
   * Returns the current string value.
   * @returns {string} The converted string.
   */
  value() {
    return this.str;
  }

  // Private helper methods

  _camelCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined || str.trim() === '') {
      throw new Error('Invalid input for camelCase');
    }
    if (/^[\s_-]/.test(str) || /[\s_-]{2,}/.test(str)) {
      throw new Error('Invalid delimiters in string for camelCase');
    }
    if (/^[a-z][a-zA-Z]*$/.test(str)) {
      return str;
    }
    const words = str.replace(/[\s_-]+/g, ' ').split(' ');
    return words.map((word, index) => {
      const lowerWord = word.toLowerCase();
      return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }).join('');
  }

  _kebabCase(str, options = {}) {
    const { separator = '-', case: caseOption = 'lower' } = options;
    if (typeof str !== 'string' || str === null || str === undefined || str.trim() === '') {
      throw new Error('Invalid input for kebabCase');
    }
    if (/^[\s_.-]/.test(str) || /[\s_.-]{2,}/.test(str)) {
      throw new Error('Invalid delimiters in string for kebabCase');
    }
    if (typeof separator !== 'string' || separator.length !== 1) {
      throw new Error('Invalid separator option');
    }
    if (!['lower', 'upper', 'title'].includes(caseOption)) {
      throw new Error('Invalid case option');
    }
    let result = str.replace(/[\s_.-]+/g, separator);
    switch (caseOption) {
      case 'lower': result = result.toLowerCase(); break;
      case 'upper': result = result.toUpperCase(); break;
      case 'title': result = result.replace(/\b\w/g, l => l.toUpperCase()); break;
    }
    return result;
  }

  _dotCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined || str.trim() === '') {
      throw new Error('Invalid input for dotCase');
    }
    if (/^[\s_-]/.test(str) || /[\s_-]{2,}/.test(str)) {
      throw new Error('Invalid delimiters in string for dotCase');
    }
    return str.replace(/[\s_-]+/g, '.').toLowerCase();
  }

  _snakeCase(str) {
    if (typeof str !== 'string' || str === null || str === undefined || str.trim() === '') {
      throw new Error('Invalid input for snakeCase');
    }
    if (/^[\s_-]/.test(str) || /[\s_-]{2,}/.test(str)) {
      throw new Error('Invalid delimiters in string for snakeCase');
    }
    return str.replace(/[\s_-]+/g, '_').toLowerCase();
  }
}

// Example usage:
// const converter = new CaseConverter("hello world");
// console.log(converter.camelCase().value()); // "helloWorld"
// console.log(converter.kebabCase().value()); // "hello-world"
// console.log(converter.dotCase().value()); // "hello.world"
// console.log(converter.snakeCase().value()); // "hello_world"

// Chaining example:
// console.log(new CaseConverter("user name").camelCase().kebabCase().value()); // "userName" -> "user-name"

// With options:
// console.log(new CaseConverter("hello world").kebabCase({ separator: '_', case: 'upper' }).value()); // "HELLO_WORLD"