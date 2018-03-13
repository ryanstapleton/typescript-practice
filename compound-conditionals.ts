let password : string = 'asdfasdf';
let email : string = 'test@test.com';

if (password == 'asdfasdf' || email == 'test@test.com') {
  console.log(`${password} and ${email} are authenticated`);
} else {
  console.log("Ah ah ah, you didn't say the magic word!");
}

if (!(email == "test@test.com")) {
  console.log("You are authorized")
}