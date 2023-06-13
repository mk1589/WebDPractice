const str = "CBBDDD 7.A 8.B 9.C 10.D 11.C 12.C13.C 14.D 15.B 16.C 17.C 18.B 19.D 20.C 21.C 22.A23.B 24.A 25.C 26.B 27.A 28.D 29.C 30.A 31.C 32.D33.A 34.D 35.A 36.C 37.A 38.A 39.C 40.C";
const [word, digits] = str.match(/\D+|\d+/g);

console.log(word);    // "ASDF"
console.log(digits); 