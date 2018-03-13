console.log(fullName('Ryan', 'Stapleton'));
console.log(otherFullName('Ryan', 'Stapleton'));
console.log(thirdFullName('Ryan', 'Stapleton'));
// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression - 
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
