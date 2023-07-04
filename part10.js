//a
console.log(today.getMinutes() + ' minutes have passed so far today');
//b
console.log(today.getSeconds() + ' seconds have passed so far today');
//c
const birthDate = new Date('1990-01-01'); // Replace with your actual birthdate
const ageDate = new Date(today - birthDate);
const years = ageDate.getUTCFullYear() - 1970;
const months = ageDate.getUTCMonth();
const days = ageDate.getUTCDate() - 1;

console.log('I am ' + years + ' years, ' + months + ' months, and ' + days + ' days old');
//d
const daysInBetween = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };
  const date1 = new Date('2023-01-01');
const date2 = new Date('2023-12-31');
console.log(daysInBetween(date1, date2)); // Output: 364
