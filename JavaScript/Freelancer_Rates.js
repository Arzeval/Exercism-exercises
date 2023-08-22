
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
 function dayRate(ratePerHour) {
  return 8 * ratePerHour
}
/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
 function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}
/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
 function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let diasobrantes = numDays % 22
  let meses = Math.floor(numDays / 22)
  let totalsobrante = dayRate(ratePerHour) * diasobrantes
  let diasmeses = dayRate(ratePerHour) * (meses * 22)
  let descuentocalculado = diasmeses * discount
  return Math.ceil(totalsobrante + diasmeses - descuentocalculado)
}