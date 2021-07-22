const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    return 'Error';
  };
  
  function getComputerChoice(randomNumber) {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    };
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'tie';
    };
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'computer won';
      } else {
        return 'user won';
      };
    };
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'computer won';
      } else {
        return 'user won';
      };
    };
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'computer won';
      } else {
        return 'user won';
      };
    };
    if (userChoice === 'bomb') {
      return 'user won';
    }
  };
  
  function playGame() {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Com: ' + computerChoice);
   console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();
  
  
  
  