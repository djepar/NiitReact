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
export const transform = (data) =>  {
    //Check if the input is valid
    if (typeof data !== "object"){
        return "Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
    } else {
    // Filter the board 
     const boardFilter = data["boards"].reduce((boards, currentBoard) => {
         let tempBoard = boards.find(board => 
            board.boardId === currentBoard["boardId"]
        )
        if(!tempBoard){
            const tempLists = data["lists"]
            .filter(list => list["boardId"] === currentBoard["boardId"])
            .map(list => {
                const tempCards = data["cards"]
                .filter(card => card["listId"] === list["listId"])
                .map(card => {
                    const tempComment = data["comments"]
                    .filter(comment => comment["cardId"]=== card["cardId"])
                    .map(comment => {
                        return {
                            commentId : comment["commentId"],
                            commentText : comment["commentText"]
                        }
                    }

                    )
                    return {
                        cardId : card["cardId"],
                        cardTitle : card["cardTitle"],
                        comments : tempComment
                    }
                });
                return {
                    listId: list["listId"],
                    listTitle: list["listTitle"],
                    cards : tempCards
                }
            });
            boards.push({
                boardId : currentBoard["boardId"],
                boardTitle : currentBoard["boardTitle"],
                lists : tempLists,
            })
        }
        return boards
    }, [])
    
    let finalData = {
        boards : boardFilter
    }
    console.log(finalData)
    return finalData
}
}