
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
 function totalBirdCount(birdsPerDay) {
    let total = 0
    for (let i = 0; i < birdsPerDay.length; i++) {
      total = total + birdsPerDay[i]
    }
    return total
  }
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
   function birdsInWeek(birdsPerDay, week) {
      let total = 0
      let startweek = week > 1 ? 7 * (week - 1) : 0
      let finishweek = week > 1 ? 7 * week : 7
      
      for (let i = startweek; i < finishweek && i < birdsPerDay.length; i++) {
         total = total + birdsPerDay[i]
       }
       return total
     
     }
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
   function fixBirdCountLog(birdsPerDay) {
      let count = 1
      let tabla = birdsPerDay
      for (let i = 0; i < birdsPerDay.length; i++) {
         console.log(i)
        if(count === 1) {
            let suma =  birdsPerDay[i] + 1
             
             tabla.splice(i, 1, suma)
             count = 0
             console.log('reinicio')
        } else {
          count = count + 1
          
        }
     
      }
      return tabla
    }
  