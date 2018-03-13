var x : number = 0;

// while loop
console.log("While")
while (x < 10) {
  console.log(x);
  x++;
}

let players : number[] = [3, 10, 4, 5, 1];

// for in - gives index values
console.log("\nFor in")
for (let player in players) {
  console.log(player);
}

// for of - gives actual values
console.log("\nFor of")
for (let player of players) {
  console.log(player);
}