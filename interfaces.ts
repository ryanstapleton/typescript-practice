// Interface is a guideline that the rest of the program must follow, makes the data conform to it

interface User {
  email : string;
  firstName? : string; // "?" Makes this field optional
  lastName? : string; 
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}!`
}

var realUser = {
  email: "test@test.com",
  firstName: "Ryan",
  lastName: "Stapleton"
};

console.log(profile(realUser));
console.log(realUser.email);

// does not follow the contract set by the User interface
var anotherUser = {
  email: "test1@test.com"
} 