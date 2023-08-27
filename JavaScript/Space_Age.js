//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const age = (planet, seconds) => {
    let years = seconds / 31557600
    switch(planet) {
      case 'mercury':
          return Number((years / 0.2408467).toFixed(2))
        break;
      case 'venus':
              return Number((years / 0.61519726).toFixed(2))
        break;
      case 'earth':
          return Number(years.toFixed(2))
        break;
      case 'mars':
          return Number((years /  1.8808158).toFixed(2))
        break;
      case 'jupiter':
            return Number((years / 11.862615).toFixed(2))
        break;
      case 'saturn':
            return Number((years / 29.447498).toFixed(2))
        break;
      case 'uranus':
            return Number((years / 84.016846).toFixed(2))
        break;
      case 'neptune':
            return Number((years / 164.79132).toFixed(2))
        break;
    }
  };