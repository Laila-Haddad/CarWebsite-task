export function truncateString(str) {
    if (str.length > 18) {
      return str.substring(0, 18) + '...';
    } else {
      return str;
    }
  }