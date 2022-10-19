/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
  console.log(typeof pricePerKilo, typeof quantityInKilo,typeof discountPercentage)
  console.log((typeof pricePerKilo === Number) && (typeof quantityInKilo === Number) && (typeof discountPercentage === Number) )
  if (typeof pricePerKilo === Number && typeof quantityInKilo === Number && typeof discountPercentage === Number ){
    return "Invalid Input Types, All Inputs Should Be of Type Number !!"
  }
  else {
    return (pricePerKilo * quantityInKilo) * discountPercentage
  }
}
// function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
//   console.log(typeof pricePerKilo, typeof quantityInKilo,typeof discountPercentage)
//   console.log((typeof pricePerKilo === Number) && (typeof quantityInKilo === Number) && (typeof discountPercentage === Number) )
//   if (typeof pricePerKilo === Number && typeof quantityInKilo === Number && typeof discountPercentage === Number ){
//     return "Invalid Input Types, All Inputs Should Be of Type Number !!"
//   }
//   else {
//     return (pricePerKilo * quantityInKilo) * discountPercentage
//   }
// }
console.log(calculateNetPayable("allo", "bonjour", 0.10))

console.log(calculateNetPayable(1, 2, 0.10))
