
/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
 function needsLicense(kind) {
  return kind === 'car' || kind === 'truck'
 }
 /**
  * Helps choosing between two options by recommending the one that
  * comes first in dictionary order.
  *
  * @param {string} option1
  * @param {string} option2
  * @returns {string} a sentence of advice which option to choose
  */
  function chooseVehicle(option1, option2) {
   if (option1[0] < option2[0] ) {
     return option1 + ' is clearly the better choice.'
   } else {
     return option2 + ' is clearly the better choice.'
   }
 }
 /**
  * Calculates an estimate for the price of a used vehicle in the dealership
  * based on the original price and the age of the vehicle.
  *
  * @param {number} originalPrice
  * @param {number} age
  */
  function calculateResellPrice(originalPrice, age) {
   if (age < 3) {
     let descuento = (originalPrice * 20) / 100
     return originalPrice - descuento
   } else if (age > 10) {
     let descuento = (originalPrice * 50) / 100
     return originalPrice - descuento
   } else if (age <= 10 && age >= 3) {
     let descuento = (originalPrice * 30) / 100
     return originalPrice - descuento
   }
 }