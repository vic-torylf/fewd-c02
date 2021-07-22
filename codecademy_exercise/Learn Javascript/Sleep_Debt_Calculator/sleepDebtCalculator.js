// const getSleepHours = (day) => {
//   switch (day) {
//     case 'Monday':
//       return 20;
//       break;
//     case 'Tuesday':
//       return 6;
//       break;
//     case 'Wednesday':
//       return 6;
//       break;
//     case 'Thursday':
//       return 6;
//       break;
//     case 'Friday':
//       return 10;
//       break;
//     case 'Saturday':
//       return 10;
//       break;
//     case 'Sunday':
//       return 10;
//       break;
//   }
// }

// const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getActualSleepHours = () => 6 + 6 + 6 + 6 + 10 + 10 + 10;

// const getIdealSleepHours = () => {
//   const idealHours = 8;
//   return idealHours * 7;
// }

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
    console.log(`overslept ${actualSleepHours - idealSleepHours} hrs.`)
  } else {
    console.log('You should get some rest.');
    console.log(`underslept ${idealSleepHours - actualSleepHours} hrs.`);
  };
};

calculateSleepDebt();
