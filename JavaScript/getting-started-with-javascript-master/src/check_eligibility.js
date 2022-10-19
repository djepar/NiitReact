/*

The checkEligibility() function should accept age as input and check for eligibility to vote

The validity criteria for age is 18 and above.

The function should return true if eligibility criteria is satisfied else should retun false.

The function should return error message "Invalid Age Input, Age Should Only Be Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function checkEligibility(age) {
  console.log(typeof age)
  if (typeof age === "number"){
    return age >= 18
  }
  else {
    return "Invalid Age Input, Age Should Only Be Number !!"
  }
}
// function checkEligibility(age) {
//   console.log(typeof age)
//   if (typeof age === "number"){
//     return age >= 18
//   }
//   else {
//     return "Invalid Age Input, Age Should Only Be Number !!"
//   }
// }
// console.log(checkEligibility(12));

// console.log(checkEligibility("bonjour"));

// console.log(checkEligibility(25));