const prompt = require("prompt-sync")({sigint:true});

//Arrays - these are the list items and completion status 
const toDoItem = [];
const toDoStatus = [];
//const toDoArray = [[],[]];

// Variables
let item1 = "Go to the dentist";
let item2 = "Buy groceries";
let listOpen = true;





console.log("\nWelcome to the To-Do List Manager Application!\n");
console.log("==============================================\n");
console.log("Your to-do list is empty.\n");
console.log("~ Select an action ~");
console.log("[1] Create a to-do item");
console.log("[2] Complete a to-do item");
let action = prompt("> ");
actionSelection(Number(action));

while(listOpen){
    if(toDoStatus[0]===  undefined && toDoItem[0] === undefined){
        console.log("Your to-do list is empty.\n");


    }
    else{
        console.log("You have " + toDoItem.length + " to-do item(s).\n");

    }
    console.log("~ Select an action ~");


    for(let i = 0; i < toDoItem.length; i++){
        console.log((i+1)+ "." + toDoStatus[i]+ " " + toDoItem[i])

    }
    console.log("==============================================\n");
    console.log("[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    let action = prompt("> ");
    actionSelection(Number(action));

}













// Creating an item
function createItem(str){
    console.log("~ Creating a new to-do item ~\nWhat is this to-do item called?")
    let item = prompt("> ");
    toDoItem.push(item);
    toDoStatus.push("[incomplete]");

    //return toDoArray;
}



// Completing an item
function completeItem(){
 
    if(toDoStatus[0]===  undefined && toDoItem[0] === undefined){
        console.log("Your list is empty.")
    }else{
        console.log("~ Completing a new to-do item ~\nWhich to-do item would you like to complete?")
        let item = prompt("> ");
        let i = item - 1;
        return toDoStatus[i] = "[complete]";
    }
}



// Action selection
function actionSelection(num){
    let n = num;
    if(n == 1){

        createItem();
    }
    else if(n == 2){
           
        completeItem();

    }


}






