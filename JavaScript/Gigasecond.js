//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 const gigasecond = (date) => {
    const newtime = date.getTime() + (Math.pow(10, 9) * Math.pow(10, 3))
    const datenew = new Date(date)
     datenew.setTime(newtime); 
    return datenew
  };
  