import {Comparator, defaultComparator} from '../functions/comparator';

/**
 * While the lower bound is less than or equal to the upper bound, find the middle index, and if the
 * value at that index is greater than the search value, set the upper bound to the middle index minus
 * one, otherwise if the value at that index is less than the search value, set the lower bound to the
 * middle index plus one, otherwise return the index.
 * @param {T[]} sortedArray - The array to search through.
 * @param {T} searchValue - The value to search for in the sorted array.
 * @param comparator - A function that takes two values and returns a number. If the number is greater
 * than 0, the first value is greater than the second. If the number is less than 0, the first value is
 * less than the second. If the number is 0, the two values are equal.
 * @param [lowerBoundIndex=0] - The index of the lower bound of the search.
 * @param upperBoundIndex - The index of the last element in the array.
 * @returns The index of the searchValue in the sortedArray if it exists, otherwise -1.
 */
export function binarySearch<T>(
  sortedArray: T[],
  searchValue: T,
  comparator: Comparator<T> = defaultComparator,
  lowerBoundIndex = 0,
  upperBoundIndex = sortedArray.length - 1
) {
  let currSearchIndex: number;
  while (
    (currSearchIndex = Math.floor((lowerBoundIndex + upperBoundIndex) / 2)) &&
    lowerBoundIndex <= upperBoundIndex
  ) {
    const currValue = sortedArray[currSearchIndex];
    if (comparator(currValue, searchValue) > 0) {
      upperBoundIndex = currSearchIndex - 1;
    } else if (comparator(currValue, searchValue) < 0) {
      lowerBoundIndex = currSearchIndex + 1;
    } else break;
  }

  return comparator(sortedArray[currSearchIndex], searchValue) === 0
    ? currSearchIndex
    : -1;
}
