/**
 * Calculate if the lasagna is done
 *
 * @param {number} time
 * @returns {string} the message
 */
   function cookingStatus(time) {
    if (time === 0) {
      return 'Lasagna is done.'
    } else if (time === undefined) {
      return 'You forgot to set the timer.'
    } else {
        return 'Not done, please wait.'
    }
  }
  /**
 * Calculate the preparaion time about lasagna
 *
 * @param {array} layers
 * @param {number} preparaion time, default: 2
 * @returns {number} the estimate for the total preparation time based on the number of layers
 */
 function preparationTime(array, time=2) {
  let count = 0
    for (let i = 0; i < array.length; i++) {
      count+= 1
    }
  return count * time
}

 /**
 * Compute the amounts of noodles and sauce needed
 *
 * @param {array} layers
 * @returns {array} Determine the quantity of noodles and sauce needed to make your meal
 */
 function quantities(array) {
    let noodlescount = 0
    let saucecount = 0
      for (let i = 0; i < array.length; i++) {
        if (array[i] === 'noodles') {
            noodlescount += 50
        } else if (array[i] === 'sauce') {
            saucecount += 0.2
        }
      }
      
    return {noodles: noodlescount, sauce: saucecount}
}
 /**
 * Get the secret ingredient
 *
 * @param {array} friendsList
 *  @param {array} myList 
 *  
 * The function should add the last item from your friend's list to the end of your list.
 * The array that represents your recipe should be modified directly and the function should not return anything. 
 * However, the first argument should not be modified.
 */
 function addSecretIngredient (array1, array2) {
      const newtable = [...array1]
    const secret = newtable.pop()
  array2.push(secret)
}
 /**
 * Scale the recipe
 *
 * @param {array} recipe
 *  @param {number} number of persons 
 *  @returns {array} recipe object with the amounts needed for the desired number of portions
 * 
 */
 function scaleRecipe (array, persons=1) {
    const recipenew = {};
    const calculate = persons / 2
        
    
    for (let portions in array) {
        recipenew[portions] = array[portions] * calculate
    }
   return recipenew
}