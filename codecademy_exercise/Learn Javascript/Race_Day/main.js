let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 19;

if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`your race number is ${raceNumber}, and you will race at 9:30 am.`);
} else if (runnerAge > 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am.`);
} else if (runnerAge < 18){
  console.log(`Your race number is ${raceNumber} and you will race at 12:30 am.`);
} else {
  console.log('go see the registration desk');
}


