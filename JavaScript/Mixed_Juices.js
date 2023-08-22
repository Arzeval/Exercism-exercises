
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
 function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
        return 0.5
    break;
    case 'Energizer':
      return 1.5
    break;
      case 'Green Garden':
      return 1.5
    break;
    case 'Tropical Island':
        return 3
    break;
    case 'All or Nothing':
        return 5
    break;
    default:
      return 2.5
      
  }
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
 function limesToCut(wedgesNeeded, limes) {
    let limestotal = 0
    let count = 0
    while(limestotal < wedgesNeeded && count < limes.length) {
    
      switch (limes[count]) {
        case 'small':
         limestotal= limestotal + 6
              break;
          case 'medium':
            limestotal = limestotal + 8 
              break;
          case 'large':
            limestotal= limestotal + 10
            break
      }
      count = count + 1
    }
    return count
  }
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
 function remainingOrders(timeLeft, orders) {
    let count = 0
    let time = 0
   
    while (time < timeLeft && count < orders.length) {
        time += timeToMixJuice(orders[count])
        count += 1
    }
    const remaining = orders.slice(count)
   
    return remaining
}
