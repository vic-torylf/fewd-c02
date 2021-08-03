const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else console.log('please enter a valid value!');
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'computer win';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'computer win';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'computer win';
  } else if (userChoice === 'bomb') {
    return '(secret cheat code entered)user win'
  } else return 'user win';
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`User: ${userChoice}
Computer: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
  
  
  