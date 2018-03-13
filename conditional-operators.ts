let x : number = 100;

// in JS:
// == only checks for equivalent value, ignores data type
// === Checks not only for value, but verifies that the data type is the same
// No need for === in TS since == enforces datatype already

if(x == 100) {
  console.log('== Condition passed');
}

if(x === 100) {
  console.log('=== Condition passed');
}