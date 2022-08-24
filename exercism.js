//Excercise 1 : Basics

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(min) {
  let remainingTime = EXPECTED_MINUTES_IN_OVEN - min;
  return remainingTime;
}

export function preparationTimeInMinutes(layer) {
  let timeSpent = layer * 2;
  return timeSpent;
}
preparationTimeInMinutes(1);

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  let layerTime = preparationTimeInMinutes(numberOfLayers);

  return layerTime + actualMinutesInOven;
}
totalTimeInMinutes(1, 5);

// Excercise 2 : Numbers

export function dayRate(ratePerHour) {
  let dailyRate = ratePerHour * 8;
  return dailyRate;
}
dayRate(3);

export function daysInBudget(budget, ratePerHour) {
  let numberOfDays = Math.floor(budget / ratePerHour / 8);
  return numberOfDays;
}
daysInBudget(2000, 89);

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;
  const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour);
  return Math.ceil(
    fullMonthPrice -
      discount * fullMonthPrice +
      remainingDays * dayRate(ratePerHour)
  );
}
priceWithMonthlyDiscount(33, 778, 0);

//Exercise: 3
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}
canSpy(true, true, false);

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  } else {
    return false;
  }
}
canSignalPrisoner(true, false);

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  } else if (
    prisonerIsAwake &&
    !petDogIsPresent &&
    !knightIsAwake &&
    !archerIsAwake
  ) {
    return true;
  } else {
    return false;
  }
}
canFreePrisoner(true, false, true, true);

//Exercise: 4
export function frontDoorResponse(line) {
  const response = line[0];
  return response;
}
frontDoorResponse("how are you?");

export function frontDoorPassword(word) {
  let wordLowerCase = word.toLowerCase();
  let wordUpperCase = wordLowerCase[0].toUpperCase();
  let newWord = wordUpperCase + wordLowerCase.slice(1);
  return newWord;
}
frontDoorPassword("shire");

export function backDoorResponse(line) {
  let removeSpace = line.trim();
  let lastLetter = removeSpace.slice(-1);
  return lastLetter;
}
backDoorResponse("Stands so high");

export function backDoorPassword(word) {
  let bePolite = `${frontDoorPassword(word)}, please`;
  return bePolite;
}
backDoorPassword("horse");

//Exercise: 5 ; Array Methods

export function getItem(cards, position) {
  let arr = cards;
  let cardNum = arr[position];
  return cardNum;
}
getItem([1, 4, 2, 3], 2);

export function setItem(cards, position, replacementCard) {
  let arrCards = cards;
  arrCards[position] = replacementCard;
  return arrCards;
}
setItem([2, 3, 1, 6], 1, 4);

export function insertItemAtTop(cards, newCard) {
  let arrCards = cards;
  arrCards.push(newCard);
  return arrCards;
}
insertItemAtTop([1, 3, 5], 3);

export function removeItem(cards, position) {
  let arrCards = cards;
  arrCards.splice(position, 1);
  return arrCards;
}
removeItem([21, 44, 22, 5], 0);

export function removeItemFromTop(cards) {
  let arrCards = cards;
  arrCards.pop();
  return arrCards;
}
removeItemFromTop([3, 4, 32, 3]);

export function insertItemAtBottom(cards, newCard) {
  let arrCards = cards;
  arrCards.unshift(newCard);
  return arrCards;
}
insertItemAtBottom([3, 4, 3, 3], 3);

export function removeItemAtBottom(cards) {
  let arrCards = cards;
  arrCards.shift();
  return arrCards;
}
removeItemAtBottom([3, 3, 54, 3, 2]);

export function checkSizeOfStack(cards, stackSize) {
  if (cards.length === stackSize) {
    return true;
  } else {
    return false;
  }
}
