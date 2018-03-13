console.log(fullName('Ryan', 'Stapleton'));
// console.log(otherFullName('Ryan', 'Stapleton'));
// console.log(thirdFullName('Ryan', 'Stapleton'));

// Function declaration - hoisted function 
function fullName(first : string, last : string) : string {
  return first + " " + last;
}

// Function expression - not hoisted, not processed at initial run-time, only when called
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
  return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
  return first + " " + last;
}