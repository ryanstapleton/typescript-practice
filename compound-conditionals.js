var password = 'asdfasdf';
var email = 'test@test.com';
if (password == 'asdfasdf' || email == 'test@test.com') {
    console.log(password + " and " + email + " are authenticated");
}
else {
    console.log("Ah ah ah, you didn't say the magic word!");
}
if (!(email == "@test.com")) {
    console.log("You are authorized");
}
