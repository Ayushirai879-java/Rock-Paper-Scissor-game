var message = document.getElementById('msg');
var userscore=0;
var compscore=0;
function ComputerChoice() {
  var choices = ['rock', 'paper', 'scissor'];
  var randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function winner(user, computer) {
  if (user == computer) {
    return "It's a tie!";
  }
  if (
    (user == 'rock' && computer == 'scissor') ||
    (user == 'scissor' && computer == 'paper') ||
    (user == 'paper' && computer == 'rock')
  ) {
    return "You win!";
  } 
  else {
      return "Computer wins!";
  }
  
}
function Score(result){
    if (result === 'You win!') {
        userscore++;
        document.getElementById('user-score').innerHTML=userscore;
        message.style.backgroundColor="green";
    } 
    else if (result ==="Computer wins!") {
        compscore++;
        document.getElementById('comp-score').innerHTML=compscore;
        message.style.backgroundColor="red";
    } 
    
}
function play(user) {
  var computer = ComputerChoice();
  var result = winner(user, computer);
  var resultText =`You select ${user}. Computer select ${computer}. ${result}`;
  document.getElementById('msg').innerHTML= resultText;
  Score(result);
}