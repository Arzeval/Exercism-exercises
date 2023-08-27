//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const allLetters = 'abcdefghijklmnopqrstuvwxyz';
export const isPangram = (text) => {
  const textconverted = text.toLowerCase()
   return allLetters.split('').every((letter) => textconverted.includes(letter))
  return false
};