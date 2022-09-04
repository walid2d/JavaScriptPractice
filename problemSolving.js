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
//Exercise: 6
export function needsLicense(kind) {
  if (kind === "car" || kind === "truck") {
    return true;
  } else {
    return false;
  }
}
needsLicense("car");

export function chooseVehicle(option1, option2) {
  return (
    (option1 > option2 ? option2 : option1) + " is clearly the better choice."
  );
}
chooseVehicle("Volkswagen Beetle", "Volkswagen Golf");

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else if (age >= 3 && age <= 10) {
    return originalPrice * 0.7;
  }
}
calculateResellPrice(1000, 3);
export function totalBirdCount(birdsPerDay) {
  let total = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }
  return total;
}
//Exercise: 7;

totalBirdCount([1, 2, 3, 4, 5]);

export function birdsInWeek(birdsPerDay, week) {
  let total = 0;
  for (let i = week * 7 - 7; i < week * 7; i++) {
    total += birdsPerDay[i];
  }

  return total;
}

birdsInWeek([2, 1, 7, 8, 9, 10], 2);

export function fixBirdCountLog(birdsPerDay) {
  let newArr = birdsPerDay;
  for (let i = 0; i < newArr.length; i++) {
    if (i % 2 === 0) {
      newArr[i] = newArr[i] + 1;
    }
  }
  return newArr;
}
fixBirdCountLog([3, 3, 4, 6, 4, 3, 2]);

//Excercise: 8
function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}
timeToMixJuice("Pure Strawberry Joy");

export function limesToCut(wedgesNeeded, limes) {
  const wedges = {
    small: 6,
    medium: 8,
    large: 10,
  };
  let wedgesToCut = 0;
  let i = 0;
  while (wedgesToCut < wedgesNeeded) {
    if (limes[i]) {
      wedgesToCut += wedges[limes[i]];
      i++;
    } else {
      return i;
    }
  }

  return i;
}

limesToCut(25, ["small", "small", "large", "medium", "small"]);

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}

//Exerciss: 9
export function createScoreBoard() {
  let record = {
    "The Best Ever": 1000000,
  };

  return record;
}
createScoreBoard();

export function addPlayer(scoreBoard, player, score) {
  let newObj = scoreBoard;
  newObj[player] = score;
  return newObj;
}
addPlayer({ "Dave Thomas": 0 }, "Jose Valim", 4);

export function removePlayer(scoreBoard, player) {
  let obj = scoreBoard;
  delete obj[player];
  return obj;
}
removePlayer({ dingdong: 3 }, "dingdong");

export function updateScore(scoreBoard, player, points) {
  let obj = scoreBoard;
  obj[player] += points;
  return obj;
}
updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73);

export function applyMondayBonus(scoreBoard) {
  let obj = scoreBoard;
  for (let key in obj) {
    obj[key] += 100;
  }
  return obj;
}

function normalize(score) {
  return 2 * score + 10;
}
const params = { score: 400, normalizeFunction: normalize };
export function normalizeScore(params) {
  let newScore = params.normalizeFunction(params.score);
  return newScore;
}
normalizeScore(params);

//exercise: 10
export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
}
createVisitor("Verena Nardi", 45, "H32AZ123");

const visitor = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
revokeTicket(visitor);
const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};
export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else if (tickets[ticketId]) {
    return `sold to ${tickets[ticketId]}`;
  }
}
ticketStatus(tickets, "RE90VAW7");

export function simpleTicketStatus(tickets, ticketId) {
  let response = tickets[ticketId] ?? `invalid ticket !!!`;
  return response;
}

export function gtcVersion(visitor) {
  let version = visitor.gtc?.version;
  return version;
}
//Exercise: 11
export function twoSum(array1, array2) {
  const arr = Number(array1.join(""));
  const arr1 = Number(array2.join(""));
  const result = arr + arr1;
  return result;
}
twoSum([1, 2, 3], [0, 7]);

export function luckyNumber(value) {
  let compare = String(value).split("").reverse().join("");
  if (value === Number(compare)) {
    return true;
  } else {
    return false;
  }
}
luckyNumber(1221);

export function errorMessage(input) {
  if (Number(input)) {
    return "";
  } else if (!input) {
    return "Required field";
  } else if (!Number(input)) {
    return "Must be a number besides 0";
  }
}
errorMessage("123");
// Exercise 12
export function cookingStatus(remainingTime = "You forgot to set the timer.") {
  if (remainingTime == 0) {
    return "Lasagna is done.";
  } else if (remainingTime > 0) {
    return "Not done, please wait.";
  }
  return remainingTime;
}
cookingStatus(0);
export function preparationTime(layers, min = 2) {
  let arr = layers.length * min;
  return arr;
}
preparationTime(["sauce", "noodles", "sauce", "meat"], 3);
export function quantities(arr) {
  let noodles = 0;
  let sauce = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sauce") {
      sauce += 0.2;
    } else if (arr[i] === "noodles") {
      noodles += 50;
    }
  }
  return {
    noodles: noodles,
    sauce: sauce,
  };
}
quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"]);
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];
export function addSecretIngredient(arr, arr2) {
  let newArr = String(arr.slice(-1));
  arr2.push(newArr);
}
addSecretIngredient(friendsList, myList);
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};
export function scaleRecipe(recipe, portion) {
  let e = portion / 2;
  let rep = Object.assign({}, recipe);
  if (!portion) {
    return recipe;
  } else {
    for (let key in rep) {
      rep[key] *= e;
    }
    return rep;
  }
}

scaleRecipe(recipe);

//Excercise 13
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age >= 50 ? "mature" : "young"
  } fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`;
}

export function costOf(sign, currency) {
  return `Your sign costs ${sign.length * 2 + 20}.00 ${currency}.`;
}

//Excercise 14;

export function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy];
  };
}

export function scale2d(sx, sy) {
  return function (x, y) {
    return [x * sx, y * sy];
  };
}

export function composeTransform(f, g) {
  return function (x, y) {
    let fresult = f(x, y);
    return g(fresult[0], fresult[1]);
  };
}

export function memoizeTransform(f) {
  let lastX = undefined;
  let lastY = undefined;
  let lastResult = undefined;
  return function (x, y) {
    if (lastX === x && lastY === y) return lastResult;
    lastX = x;
    lastY = y;
    lastResult = f(x, y);
    return lastResult;
  };
}

//Exercise : 15
import { notify } from "./notifier";
import { order } from "./grocer";

export function onSuccess() {
  return notify({ message: "SUCCESS" });
}

export function onError() {
  return notify({ message: "ERROR" });
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

export function postOrder(variety, quantity) {
  let obj = { variety, quantity };
  return orderFromGrocer(obj, onSuccess, onError);
}
//Exercise: 16;

export function getFirstCard(deck) {
  let [firstEle] = deck;
  return firstEle;
}

export function getSecondCard(deck) {
  let [, s] = deck;
  return s;
}

export function swapTopTwoCards(deck) {
  let [first, second, ...rest] = deck;
  return [second, first, ...rest];
}

export function discardTopCard(deck) {
  let [first, ...rest] = deck;
  return [first, rest];
}

/** @type Card[] **/
const FACE_CARDS = ["jack", "queen", "king"];

export function insertFaceCards(deck) {
  let [a, ...rest] = deck;
  return [a, ...FACE_CARDS, ...rest];
}

// diagonal difference: HackerRank
function diagonalDifference(arr) {
  let left = 0;
  let right = 0;
  let n = arr[0].length;
  for (let i = 0, j = n - 1; i < n, j > -1; i++, j--) {
    left += arr[i][i];
    right += arr[i][j];
  }

  return Math.abs(left - right);
}

//alternate solution using destructuring;
function diagonalDifference(arr) {
  let [a, b, c] = arr;
  let [a1, , a2] = a;
  let [, b1] = b;
  let [c1, , c2] = c;
  let left = a1 + b1 + c2;
  let right = a2 + b1 + c1;

  return Math.abs(left - right);
}

// Exercise: 18;

export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

export function isEachCardEven(stack) {
  return stack.every((num) => num % 2 === 0);
}

export function doesStackIncludeOddCard(stack) {
  return stack.some((num) => num % 2 !== 0);
}

export function getFirstOddCard(stack) {
  return stack.find((num) => num % 2 !== 0);
}

export function getFirstEvenCardPosition(stack) {
  return stack.findIndex((num) => num % 2 === 0);
}
//Exercise: 19;
function staircase(n) {
  let stairs = "#";
  let space = " ";
  for (let i = 1; i <= n; i++) {
    if (i === n) {
      console.log(stairs.repeat(i));
    } else {
      console.log(space.repeat(n - (i + 1)), stairs.repeat(i));
    }
  }
}
export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}
export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}
export class ProgramWindow {
  constructor() {
    this.screenSize = {
      width: 800,
      height: 600,
    };
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    if (newSize.width < 1) newSize.width = 1;
    if (newSize.height < 1) newSize.height = 1;
    if (newSize.width > this.screenSize.width)
      newSize.width = this.screenSize.width - this.position.x;
    if (newSize.height > this.screenSize.height)
      newSize.height = this.screenSize.height - this.position.y;
    this.size.height = newSize.height;
    this.size.width = newSize.width;
  }
  move(newPosition) {
    if (newPosition.x < 0) newPosition.x = 0;
    if (newPosition.y < 0) newPosition.y = 0;
    if (newPosition.x + this.size.width > this.screenSize.width)
      newPosition.x = this.screenSize.width - this.size.width;
    if (newPosition.y + this.size.height > this.screenSize.height)
      newPosition.y = this.screenSize.height - this.size.height;
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  }
}
export function changeWindow(ins) {
  const size = new Size(400, 300);
  const position = new Position(100, 150);

  ins.resize(size);
  ins.move(position);
  return ins;
}