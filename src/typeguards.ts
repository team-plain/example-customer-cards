/**
 * If you have an array which contains null, undefined or both
 * and you want to filter them, then you can use these typeguards.
 *
 * If you use them you need to use them in this specific way due to a limitation
 * of typescripts types for Array.filter:
 *
 * This will work: `myArray.filter(typeguards.isNotNull);`
 *
 * This will NOT work: `myArray.filter((item) => typeguards.isNotNull(item))`
 */

function isNotNull<T>(n: T | null): n is T {
  return n !== null;
}

function isNotUndefined<T>(n: T | undefined): n is T {
  return n !== undefined;
}

export const typeguards = {
  isNotNull,
  isNotUndefined,
};
