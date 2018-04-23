// Interface is a guideline that the rest of the program must follow, makes the data conform to it
function profile(user) {
    return "Welcome, " + user.firstName + " " + user.lastName + "!";
}
var realUser = {
    email: "test@test.com",
    firstName: "Ryan",
    lastName: "Stapleton"
};
console.log(profile(realUser));
console.log(realUser.email);
