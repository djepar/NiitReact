/*

The generateRandomNumber() function should accept min and max as range boundary values.

The function should generate a random whole number in the given range and return it.

The function should return error message 'Incorrect Inputs. 1st value should be less than the second', 
if the min value is greater than or equal to max value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function generateRandomNumber(min, max) {
  console.log(typeof min, typeof max)
  if (min > max){
    return 'Incorrect Inputs. 1st value should be less than the second';
  }   
  else if(typeof min !== "number" || typeof max !== "number"){
    return "Invalid Input Types, All Inputs Should Be of Type Number !!"
  }
  else{
    return Math.floor(Math.random() *(max-min)) + min
  }
}

// function generateRandomNumber(min, max) {
//   console.log(typeof min, typeof max)
//   if (min > max){
//     return 'Incorrect Inputs. 1st value should be less than the second';
//   }   
//   else if(typeof min !== "number" || typeof max !== "number"){
//     return "Invalid Input Types, All Inputs Should Be of Type Number !!"
//   }
//   else{
//     return Math.floor(Math.random() *(max-min)) + min
//   }
// }
// console.log(generateRandomNumber(0, 10))

// console.log(generateRandomNumber(2, 10))