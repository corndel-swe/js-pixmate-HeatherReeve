// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Finds the index of the first element in an array that is smaller than the element before it.
 *
 * @example
 * // returns 3
 * stepDown([10, 12, 15, 14, 16, 20])
 *
 * @example
 * // returns -1 (no element is smaller than its predecessor)
 * stepDown([5, 10, 15, 20])
 *
 * @param {number[]} numbers - An array of numbers to be examined.
 * @returns {number} The index of the first element that is smaller than its predecessor.
 *                   Returns -1 if no such element is found or if the array is empty.
 */
export function stepDown(numbers) {
  // look through list of numbers
  // for each number check
  // is it smaller than the one before it 
  // if yes what is its index
  //if no try the next one 
  //what if there is not one return -1


  for (let i=1; i< numbers.length;i++) //i=1 skipd first number so doesn't go omg there's nothing before this

  if (numbers [i] < numbers[i - 1]) {
    return i

  }
  return -1

}
  