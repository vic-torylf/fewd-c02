// forecast today temperature in kelvin
const kelvin = 0;
// convert kelvin to celsius
const celsius = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius *(9/5) + 32;
// rounded down fahrenheit
fahrenheit = Math.floor(fahrenheit);
// convert celsius to newton
let newton = celsius *(33/100);
// rounded down newton
newton = Math.floor(newton);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
