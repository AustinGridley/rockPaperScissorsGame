/* Ask how many dice would you like to use?
Capture said dice number with x
*/

//can I do multiple java sheets for the same website. is this effective or do I just need to make it work? do I plug it in the same way that one does with html? does this work with css?
// can functions not go in each other?
//on click this function makes these other two functions happen
function mainThing()    {
    
    diceRoll()
    
    // startOver()
}
function diceRoll(){
    youPicked()
    computerPicks()
    whoWon()
    lucky()
}
var userChoiceGlobal;
function youPicked() {
    //this function captures their response and prints their response appropriately
    let userChoice = document.getElementById("inputText").value;
    userChoice = userChoice.toLowerCase();
     userChoiceGlobal = userChoice;
     if (userChoice=="rock") {
        userChoiceGlobal=1;
    }
    if (userChoice=="paper") {
        userChoiceGlobal=2;
    }
    if (userChoice=="scissors") {
        userChoiceGlobal=3;
    }
        document.getElementById("printUserOutput").innerHTML = "You picked " + userChoice;
}
var computerChoiceGlobal;
function computerPicks() {
    //captures their answer
    //goes to function diceRandom and assigns a random number
    let computerOutput;
    let x = 3;
    let computerChoice=randomPick(x)
    
    if (computerChoice==1) {
        computerOutput="rock";
    }
    if (computerChoice==2) {
        computerOutput="paper";
    }
    if (computerChoice==3) {
        computerOutput="scissors";
    }
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    computerChoiceGlobal=computerChoice
    document.getElementById("printOpponentOutput").innerHTML = `Your worthy opponent picked ${computerOutput}`;
}
var winsCount=0;
var lossCount=0;
var tiedCount=0;
function whoWon(){
    console.log(userChoiceGlobal)
    console.log(computerChoiceGlobal)
    if ((userChoiceGlobal==2&&computerChoiceGlobal==2)||(userChoiceGlobal==3&&computerChoiceGlobal==3)||(userChoiceGlobal==1&&computerChoiceGlobal==1)) {
        tiedCount=tiedCount+1;
        document.getElementById("printOutcome").innerHTML = `It's a Tie!`;
    }
    if ((userChoiceGlobal==1&&computerChoiceGlobal==3)||(userChoiceGlobal==2&&computerChoiceGlobal==1)||(userChoiceGlobal==3&&computerChoiceGlobal==2)) {
        winsCount=winsCount+1;
        document.getElementById("printOutcome").innerHTML = `You Won!`;
    }
    if ((userChoiceGlobal==3&&computerChoiceGlobal==1)||(userChoiceGlobal==2&&computerChoiceGlobal==3)||(userChoiceGlobal==1&&computerChoiceGlobal==2)) {
        lossCount=lossCount+1;
        document.getElementById("printOutcome").innerHTML = `You Lost!`;
    }
    
}
function lucky()    {
    

   
        document.getElementById("luckyLocation").innerHTML = `You have won ${winsCount} game(s), lost ${lossCount} game(s), and tied ${tiedCount} game(s)!`;

    
}

function randomPick () {
    //this function rolls a dice based on their input and returns it
    let randomNumber = Math.random() * 3 /*"demo" or x or what?*/; 
    //let diceRoll = Math.random() * 6; 
    randomNumber = Math.ceil(randomNumber);
    
    return randomNumber
    }



    /*document.getElementById("dice1").innerHTML = dice1;
    let dice2 = diceRandom;
    document.getElementById("dice1").innerHTML = dice2;
    let dice3 = diceRandom;
    document.getElementById("dice1").innerHTML = dice3;
    let dice4 = diceRandom;
    document.getElementById("dice1").innerHTML = dice4;
    let dice5 = diceRandom;
    document.getElementById("dice1").innerHTML = dice5;
    let dice6 = diceRandom;
    document.getElementById("dice1").innerHTML = dice6;
    console.log(dice1())
    console.log(dice2())
    console.log(dice3())
    console.log(dice4())
    console.log(dice5())
    console.log(dice6())*/

    /*function startOver()    {
    document.getElementById("tryAgain").innerHTML = "Roll different sided dice?"
}*/


    /*function iconSelection(diceRoll) {
    let y;
    if ("demo"==1) {
        y = <i class="fas fa-dice-one"></i>
        
    }
    if (diceRoll==2) {
        y = <i class="fas fa-dice-two"></i>
        
    }
    if (diceRoll==3) {
        y = <i class="fas fa-dice-three"></i>
        
    }
    if (diceRoll==4) {
        y = <i class="fas fa-dice-four"></i>
        
    }
    if (diceRoll==5) {
        y = <i class="fas fa-dice-five"></i>
        
    }
    if (diceRoll==6) {
        y = `<i class="fas fa-dice-six"></i>`
        
    }
    if (diceRoll>6) {
        y = `<i class="fas fa-dice-dice"></i>`
        
    }
    document.getElementById("diceIcon").innerHTML = y;
}
*/