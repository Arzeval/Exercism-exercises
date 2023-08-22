
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
 function frontDoorResponse(line) {
  return line[0]
}
/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
 function frontDoorPassword(word) {
  const sentence = word.slice(1)
  return word[0].toUpperCase() + sentence.toLowerCase()
}
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
 function backDoorResponse(line) {
  let finalline = line.trim()
    let number = finalline.length
    return finalline[number - 1]
}
/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
 function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please'
}