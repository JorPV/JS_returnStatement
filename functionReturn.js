//Part 1
const checkNumber = function (ourNumber) {
  if (ourNumber > 100) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNumber(10));

// Bouncer at a club

const bouncerBrenda = function (age, numPeople) {
  if (age < 18) {
    return "This club is for adults";
  } else if (numPeople >= 50) {
    return "It is too busy now, please come back later";
  } else {
    return "Come in";
  }
};

const theDoor = bouncerBrenda(20, 30);
console.log(theDoor);

// The average
const getNumbers = [20,10,5,15,30];

function calcAverage(getNumbers) {
  const total = getNumbers.reduce((acc, c) => acc + c, 0);
  return total / getNumbers.length;
}

const result = calcAverage(getNumbers);
console.log(result);


