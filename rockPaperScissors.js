// get user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
    {return userInput}
  else
    {console.log('Error!')}
}

// get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissors';
  }
}

// determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb')
    {return 'You won because you threw a bomb!'}
  else if (userChoice === computerChoice)
    {return 'Tie!'}
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper')
      {return 'Computer won!'}
    else
      {return 'You won!'}}
  else if (userChoice === 'paper')
    {if (computerChoice === 'scissors')
      {return 'Computer won!'}
    else
      {return 'You won!'}}
  else if (userChoice === 'scissors')
    {if (computerChoice === 'rock')
      {return 'Computer won!'}
    else
      {return 'You won!'}}
}

// play game function
const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}.`);
  console.log(`The computer threw: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice))
}

// play the game -- argument is either "rock", "paper", "scissors", or "bomb"
playGame('paper');
