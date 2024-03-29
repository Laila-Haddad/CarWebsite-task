export function truncateString(str) {
    if (str.length > 16) {
      return str.substring(0, 16) + '...';
    } else {
      return str;
    }
  } 


  export function fixMilage(number) {
    const milage = `${number/1000}KM/1-lt`
    return milage
  } 


  export function sortByAtrr(array , attribute){
    array.sort((a, b) => {
      if (a[attribute] < b[attribute]) {
        return -1;
      }
      if (a[attribute] > b[attribute]) {
        return 1;
      }
      return 0;
    });
  }
