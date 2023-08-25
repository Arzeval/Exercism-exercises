//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'  
    ];
     const decodedValue = (array) => {
       let number1 = COLORS.indexOf(array[0]).toString()
      let number2 = COLORS.indexOf(array[1]).toString()
      let final = number1 + number2
      return Number(final)
    };