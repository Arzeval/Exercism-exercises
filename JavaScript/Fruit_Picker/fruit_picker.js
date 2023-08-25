
import { notify } from './notifier';
import { order } from './grocer';
/**
 * @return void
 */
 function onSuccess() {
  return notify({message: 'SUCCESS'})
}
/**
 * @return void
 */
 function onError() {
   return notify({message: 'ERROR'})
}
/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
 function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback)
}
/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
 function postOrder(variety, quantity) {
  return orderFromGrocer({variety, quantity}, onSuccess, onError)
}