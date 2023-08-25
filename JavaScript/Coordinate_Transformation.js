
/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
 function translate2d(dx, dy) {
    function translate(x, y) {
      return [dx + x, dy + y]
    }
    return translate
  }
  /**
   * Create a function that returns a function making use of a closure to
   * perform a repeatable 2d scale of a coordinate pair.
   *
   * @param {number} sx the amount to scale the x component
   * @param {number} sy the amount to scale the y component
   *
   * @returns {function} a function which takes an x, y parameter, returns the
   *  scaled coordinate pair in the form [x, y]
   */
   function scale2d(sx, sy) {
   function scale(x, y) {
     return [sx * x, sy * y]
   }
    return scale
  }
  /**
   * Create a composition function that returns a function that combines two
   * functions to perform a repeatable transformation
   *
   * @param {function} f the first function to apply
   * @param {function} g the second function to apply
   *
   * @returns {function} a function which takes an x, y parameter, returns the
   *  transformed coordinate pair in the form [x, y]
   */
   function composeTransform(f, g) {
    return function(x, y) {
          const intermediateResult = f(x, y);
          return g(intermediateResult[0], intermediateResult[1]);
    }
  }
  /**
   * Return a function that memoizes the last result.  If the arguments are the same as the last call,
   * then memoized result returned.
   *
   * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
   *
   * @returns {function} a function which takes x and y arguments, and will either return the saved result
   *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
   */
   function memoizeTransform(f) {
     let lastArgs = null;
      let lastResult = null;
      return function (...args) {
          if (lastArgs !== null && areArraysEqual(args, lastArgs)) {
              return lastResult;
          }
          lastArgs = args;
          lastResult = f(...args);
          return lastResult;
      };
    function areArraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) {
          return false;
      }
      for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
              return false;
          }
      }
      return true;
  }
  }