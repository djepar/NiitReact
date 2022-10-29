/*

The transform() function should accept data as input and transform it

The contents of data folder is fetched from `input.js` file

The function has to transform the data and generate as per the structure given in `expected-output.js`.

The expected-output data is used to render it on the browser using the code provided in `board-renderer.js` file.

The function should return error message 
"Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
if the data is not an object and / or does not contain boards, lists, cards and comments as its array properties

DO NOT MODIFY THE CODE IN OTHER FILES AS IT WILL IMPACT THE TEST OUTCOME AND BROWSER OUTPUT.

*/
export const transform = (data) => {
    if (typeof data !== "object"){
        return "Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
 } else {
     const boardArray = data.reduce((boardArr, currentArr) => {
         let tempBoard = boardArr.find(board => board.boardId)
         console.log()
     })

 }


    // let premiumProducts = newProducts.filter(product => product.price > 300)
    // .map(product => {
    //     return {
    //         productName : product.productName.toUpperCase(),
    //         price : product.price
    //     }
    // })
    // .reduce((stocks, currentProduct)=>{
    //     let stockItem = stocks.find(product => product.productName === currentProduct.productName);
    //     if(stockItem){
    //         ++stockItem.stock;
    //     } else {
    //         stocks.push({
    //             productName : currentProduct.productName,
    //             stock : 1
    //         })
    //     }
    //     return stocks
    // }, [])

};