/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/

module.exports = function checkPassword(password) {
  let exp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,20})$");
  return exp.test(password);
}
// function checkPassword(password) {
//   let exp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//   return exp.test(password);
// }
// console.log(checkPassword("Bonjour!#3"));
// console.log(checkPassword('Bonjour'));
// console.log(checkPassword("Bonjour!#3FDFFFFFFFFFFFFFFFFFFFFFFFFFF"));
// console.log(checkPassword("!#3"));
// console.log(checkPassword("!!!!!!#3"));
// console.log(checkPassword("bonjour")



