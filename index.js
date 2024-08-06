// Capitalizes the first letter of a string
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// Converts camelCase to kebab-case
export const camelCaseToKebabCase = str =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

// Truncates a string to a specified length
export const truncate = (str, length) =>
  str.length > length ? str.substring(0, length) + '...' : str;
