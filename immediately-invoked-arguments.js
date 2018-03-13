// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Ryan', 'Stapleton'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Ryan', 'Stapleton');
