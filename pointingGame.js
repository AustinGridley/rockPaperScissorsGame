var choice1Global=0;
var choice2Global=0;
var choice3Global=0;
var choice4Global=0;
var winsCount=0;
var lossCount=0;
var yourEvations=0;
var computerEvations=0;
var turn=0;
var computerChoiceGlobal;
function gamePlay() {
    //this function randomly generates a choice of rock paper or scissors by the computer and prints it appriately
    computerPicks()
    //this function takes what the user picked and what the computer generated and finds out who won and prints it
    whoWon()
    //this function keeps track and prints how many wins / ties / and losses the user and computer have
    lucky()
}
function choice1() {
    choice1Global=1;
    document.getElementById("printUserOutput").innerHTML = "You pointed Up"
    if ((choice2Global=1) || (choice3Global=1) || (choice4Global=1))
    {
        choice2Global=0;
        choice3Global=0;
        choice4Global=0;
    }
    document.getElementById("dropbtn").innerHTML = "Pointed Up";
    gamePlay()
}
function choice2() {
    choice2Global=1;
    document.getElementById("printUserOutput").innerHTML = "You pointed Down"
    if ((choice1Global=1) || (choice3Global=1) || (choice4Global=1))
    {
        choice1Global=0;
        choice3Global=0;
        choice4Global=0;
    }
    document.getElementById("dropbtn").innerHTML = "Pointed Down";
    gamePlay()
}
function choice3() {
    choice3Global=1;
    document.getElementById("printUserOutput").innerHTML = "You pointed Right"
    if ((choice1Global=1) || (choice2Global=1) || (choice4Global=1))
    {
        choice1Global=0;
        choice2Global=0;
        choice4Global=0;
    }
    document.getElementById("dropbtn").innerHTML = "Pointed Right";
    gamePlay()
}
function choice4() {
    choice4Global=1;
    document.getElementById("printUserOutput").innerHTML = "You pointed Left"
    if ((choice1Global=1) || (choice2Global=1) || (choice3Global=1))
    {
        choice1Global=0;
        choice2Global=0;
        choice3Global=0;
    }
    document.getElementById("dropbtn").innerHTML = "Pointed Left";
    gamePlay()
}
//this function randomly generates a choice of rock paper or scissors by the computer and prints it appriately
function computerPicks() {
    let computerOutput;
//generates a random number between 1-3 and assigns it
    let computerChoice=randomPick()
//assigns an output approriate to which number was generated
    if (computerChoice==1) {
        computerOutput="Up";
    }
//assigns an output approriate to which number was generated
    if (computerChoice==2) {
        computerOutput="Down";
    }
//assigns an output approriate to which number was generated
    if (computerChoice==3) {
        computerOutput="Right";
    }
    if (computerChoice==4) {
        computerOutput="Left";
    }
    computerChoiceGlobal=computerChoice
//prints what the computer picked
    document.getElementById("printOpponentOutput").innerHTML = `Your worthy opponent pointed ${computerOutput}`;
}
//this function takes what the user picked and what the computer generated and finds out who won and prints it
function whoWon(){
    if ((choice1Global==1 && computerChoiceGlobal==1) ||
    (choice2Global==1 && computerChoiceGlobal==2) ||
    (choice3Global==1 && computerChoiceGlobal==3) ||
    (choice4Global==1 && computerChoiceGlobal==4)) 
    {
        if (turn==0) {
            winsCount=winsCount+1;
            document.getElementById("printOutcome").innerHTML = `You Won This Round!`;
            document.getElementById("printTurn").innerHTML = `It is Your Opponents Turn!`;
            document.getElementById("h55").innerHTML = "";
            document.getElementById("h555").innerHTML = "";
            turn=1;
        }
        else {
            lossCount=lossCount+1;
            document.getElementById("printOutcome").innerHTML = `You Lost This Round!`;
            document.getElementById("printTurn").innerHTML = `It is Your Turn!`;
            document.getElementById("h55").innerHTML = "";
            document.getElementById("h555").innerHTML = "";
            turn=0;
        }
    }
    else {
        if (turn==0) {
            document.getElementById("printTurn").innerHTML = `It is Your Opponents Turn!`;
            computerEvations=computerEvations+1;
            turn=1;
        }
        else{
            document.getElementById("printTurn").innerHTML = `It is Your Turn`;
            yourEvations=yourEvations+1;
            turn=0;
        }
        document.getElementById("printOutcome").innerHTML = "";
    }
}
//this function keeps track and prints how many wins / ties / and losses the user and computer have
function lucky()    {
    document.getElementById("luckyLocation").innerHTML = `You Have Won ${winsCount} Game(s), Lost ${lossCount} Game(s), You've Evaded Defeat ${yourEvations} Time(s), and You've Been Evaded ${computerEvations} Time(s)`;   
}
//this function generates a random number between 1-3
function randomPick () {
    let randomNumber = Math.random() * 4; 
    randomNumber = Math.ceil(randomNumber);
    return randomNumber
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}