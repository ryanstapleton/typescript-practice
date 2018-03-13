var x = 100;
// == only checks for equivalent value, ignores data type
// === Checks not only for value, but verifies that the data type is the same
if (x == "100") {
    console.log('== Condition passed');
}
if (x === "100") {
    console.log('=== Condition passed');
}
