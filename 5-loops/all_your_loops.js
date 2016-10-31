// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; if i < 5; i++) {
  checkz++;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

var i = 0;

while (i < 3) {
  checks -= 2;
  i++;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

/* The variable i is set to 0 and told to run as long as it
is less than the length of the array in the variable 'numbers' (7);
As long as it is, it is adding the number at the current spot
in the array to the variable 'total'. This keeps on going untill i 
hits 8, at the loop ends. */
