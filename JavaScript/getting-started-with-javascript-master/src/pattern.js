/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *   
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

// module.exports = function drawPattern(numberRow) {
//   console.log(typeof numberRow)
//   if (typeof numberRow === "number"){
//     let structure = ""
//     for(let i = 0; i < numberRow; i++){
//       let j = 0;
//       while(j < Math.floor(numberRow - i)){
//         structure += " "
//         j++;
//           }
//         structure += GenStar(i) + ".\n"
//       }
//       return structure
//     }

//   else {
//     return "Invalid Input Type, Row Input Should Be of Type Number !!"
//   }
// }
function GenStar(i){
  let len = i + i + 1 ;
  let tempRow = ""
  for(let k = 0; k <= len; k++){
    if (k % 2 === 0){
      tempRow += "*"
    }
    else{
      tempRow += " "
    }
  }
  return tempRow
}

function drawPattern(numberRow) {
  console.log(typeof numberRow)
  if (typeof numberRow === "number"){
    let structure = ""
    for(let i = 0; i < numberRow; i++){
      let j = 0;
      console.log(structure)
      while(j < numberRow - i){
        console.log(j)
        structure += " "
        j++;
        }
        structure += GenStar(i) + ".\n"
      }
      return structure
    }

  else {
    return "Invalid Input Type, Row Input Should Be of Type Number !!"
  }
}

console.log(drawPattern(5))