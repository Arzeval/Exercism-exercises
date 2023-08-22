
/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
 function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''))
}
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
 function luckyNumber(value) {
  let string = String(value)
    const separacadena = string.split("")
    const invertircadena = separacadena.reverse()
    const unircadena = invertircadena.join("")
    return unircadena === string
}
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
 function errorMessage(input) {
   if (input === null || input === undefined || input === '' ) {
        return 'Required field'
   } else if(isNaN(Number(input)) || Number(input) === 0) {
        return 'Must be a number besides 0'
   } else {
    return ''
   }
}