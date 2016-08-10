export function convertUnix() {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return function (input) {
    const time = new Date(input * 1000);
    const converted = {};
    converted.year = time.getFullYear();
    converted.month = monthNames[time.getMonth()];
    converted.date = time.getDate();
    converted.day = dayNames[time.getDay()];
    return converted;
  };
}
