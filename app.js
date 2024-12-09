
const getUserChoice = (userInput) => {
const result = Math.floor(Math.random() * 3)
  if(result === 0){
    return 'rock'
  }else if(result === 1){
    return 'paper'
  }
  else{
    return 'scissors'
  }}

const getComputerChoice = () => {
  const result = Math.floor(Math.random() * 3)
  if(result === 0){
    return 'rock'
  }else if(result === 1){
    return 'paper'
  }
  else{
    return 'scissors'
  }
 
}
const determineWinner = (userChoice, computerChoice) => {
if(userChoice === computerChoice){
  return 'The game ends in a tie'
}if(userChoice === 'rock'){
  if(computerChoice === 'paper'){
    return 'You won!'
  }else if(computerChoice === 'scissors'){
    return 'You won!'
  }
}
if(userChoice === 'paper'){
  if(computerChoice === 'scissors'){
    return 'The computer has won!'
  }else{
    return 'You won!'
  }
}
if(userChoice === 'scissors'){
  if(computerChoice === 'rock'){
    return 'The computer has won!'
  }else{
    return 'You have won!'
  }
}
}
const playGame = () => {
  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()
  console.log('Your threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
}
playGame()

