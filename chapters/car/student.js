//Bewegen
function forwardN(bike, n) {
  for (let i = 0; i < n; i++) {
      forward(bike);
  }
}

function backward(car) {
  turnAround(car);
  forward(car);
  turnAround(car);
}

function forwardUntilWall(bike) {
  while (!sensor(bike)) {
      forward(bike);
  }
}

function forwardUntilWallOrEnd(car) {
  while (!sensor(car) && !destinationReached(car)) {
      forward(car);
  }
}

function forwardUntilFreeRight(car) {
  while (sensorRight(car)) {
      forward(car);
  }
}

function forwardUntilFreeLeft(car) {
  while (sensorLeft(car)) {
      forward(car);
  }
}

function nRight(car, n) {
  for (let i = 0; i < n - 1; i++) {
      forwardUntilFreeRight(car);
      forward(car);
  }
  forwardUntilFreeRight(car);
  turnRight(car);
  forward(car);
}
function nLeft(car, n) {
  for (let i = 0; i < n - 1; i++) {
      forwardUntilFreeLeft(car);
      forward(car);
  }
  forwardUntilFreeLeft(car);
  turnLeft(car);
  forward(car);
}

//Draaien
function turnLeft(bike) {
  turnRight(bike);
  turnRight(bike);
  turnRight(bike);
}

function turnAround(car) {
  turnRight(car);
  turnRight(car);
}

function chooseDirection(car) {
  while (true) {
      if (sensor(car)) {
          turnRight(car);
      } else {
          return;
      }
  }
}

//Sensors
function sensorLeft(car) {
  turnLeft(car);
  let result = sensor(car);
  turnRight(car);
  return result;
}

function sensorRight(car) {
  turnRight(car);
  let result = sensor(car);
  turnLeft(car);
  return result;
}

function sensorBack(car) {
  turnAround(car);
  let result = sensor(car);
  turnAround(car);
  return result;
}

function isDeadEnd(car) {
  let result = 0;
  if (sensor(car)) {
      result++;
  }
  turnRight(car);
  if (sensor(car)) {
      result++;
  }
  turnAround(car);
  if (sensor(car)) {
      result++;
  }
  turnRight(car);

  return result === 3;

}

//Oefeningen
function myFirstFunction(bike) {
  forward(bike);
}

function twiceForward(bike) {
  forward(bike);
  forward(bike);
}

function thriceForward(bike) {
  forwardN(bike, 3);
}

function forward4(bike) {
  forwardN(bike, 4);
}

function forward5(bike) {
  forwardN(bike, 5);
}

function forward10(bike) {
  forwardN(bike, 10);
}

function right(bike) {
  turnRight(bike);
  forward(bike);
}

function ellShape(bike) {
  forward5(bike);
  turnRight(bike);
  forward4(bike);
}

function uTurn(bike) {
  thriceForward(bike);
  turnRight(bike);
  forward10(bike);
  turnRight(bike);
  twiceForward(bike);
}

function crookedUTurn(bike) {
  forwardN(bike, 7);
  turnRight(bike);
  forwardN(bike, 9);
  turnRight(bike);
  forwardN(bike, 3);
}

function smartEllShape(bike) {
  forwardUntilWall(bike);
  turnRight(bike);
  forwardUntilWall(bike);
}

function spiral(car) {
  for (let i = 0; i < 18; i++) {
      forwardUntilWall(car);
      turnRight(car);
  }
}

function left(car) {
  turnLeft(car);
  forward(car);
}

function slalom(car) {
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
}

function leftOrRight(car) {
  while (true) {
      forwardUntilWall(car);
      if (sensor(car)) {
          turnRight(car); //Check right
          if (sensor(car)) {
              turnRight(car);
              turnRight(car); //Check Left
              if (sensor(car)) {
                  return; //Stop driving
              }
          }
      }
  }
}

function incompleteU(car) {
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
}

function whichDirection(car) {
  chooseDirection(car);
  forwardUntilWall(car);
}

function firstRight(car) {
  forwardUntilFreeRight(car);
  turnRight(car);
  forwardUntilWall(car);
}

function firstLeft(car) {
  forwardUntilFreeLeft(car);
  turnLeft(car);
  forwardUntilWall(car);
}

function zigZag(car) {
  firstRight(car);
  turnLeft(car);
  forward(car);
  firstLeft(car);
}

function secondRight(car) {
  forwardUntilFreeRight(car);
  forward(car);
  firstRight(car);
  forwardUntilWall(car);
}

function thirdRight(car) {
  nRight(car, 3);
  forwardUntilWall(car);
}

function fourthRight(car) {
  nRight(car, 4);
  forwardUntilWall(car);
}

function fifthLeft(car) {
  nLeft(car, 5);
  forwardUntilWall(car);
}

function maze(car) {
  nRight(car, 2);
  nLeft(car, 1);
  nLeft(car, 2);
  nLeft(car, 2);
  nRight(car, 4);
  nRight(car, 1);
  nLeft(car, 3);
  forwardUntilWall(car);
}

function findDeadEnd(car) {
  while (true) {
      if (!sensor(car)) {
          forward(car);
          if (isDeadEnd(car)) { return; }
          backward(car);
      }
      turnRight(car);
  }
}

function follow(car) {
  leftOrRight(car); //4 sterren btw
}

function rightHand(car) {
  while (true) {
      turnRight(car); //Turning right is priority
      if (sensor(car)) {
          turnLeft(car); //Going forward is second
          if (sensor(car)) {
              turnLeft(car); //Left is last option
              if (sensor(car)) {
                  return; //If we get here we are at a dead end
              }
          }
      }
      forward(car);
  }
}

function forwardUntilDestination(car) {
  while (!destinationReached(car)) {
      forward(car);
  }
}

function roomba(car) {
  while (!destinationReached(car)) {
      forwardUntilWallOrEnd(car);
      if (destinationReached(car)) {
          return;
      }
      turnRight(car);
      forward(car);
      turnRight(car);
      forwardUntilWallOrEnd(car);
      if (destinationReached(car)) {
          return;
      }
      turnLeft(car);
      forward(car);
      turnLeft(car);
  }
}

function satnav(car) {
  const visited = [];
  let currentPosition = [0, 0];

  go();

  function north() {
      forward(car);
      currentPosition[1]++;
  }
  function south() {
      backward(car);
      currentPosition[1]--;
  }
  function west() {
      turnLeft(car);
      forward(car);
      turnRight(car);
      currentPosition[0]--;
  }
  function east() {
      turnRight(car);
      forward(car);
      turnLeft(car);
      currentPosition[0]++;
  }

  function addVisited() {
      visited.push(currentPosition.slice());
  }

  function isVisited() {
      for (let p of visited) {
          //Check alle coordinaten in de array
          if (p[0] === currentPosition[0] && p[1] === currentPosition[1]) {
              return true;
          }
      }
      return false;
  }

  function go() {
      if (!isVisited()) {
          addVisited();
          if (destinationReached(car)) {
              return true;
          }

          if (!sensor(car)) {
              north();
              if (go()) {
                  return true;
              }
              south();
          }
          if (!sensorRight(car)) {
              east();
              if (go()) {
                  return true;
              }
              west();
          }
          if (!sensorBack(car)) {
              south();
              if (go()) {
                  return true;
              }
              north();
          }
          if (!sensorLeft(car)) {
              west();
              if (go()) {
                  return true;
              }
              east();
          }
          return false; //Als we nergens naartoe kunnen gaan dan moeten we terug
      } else {
          return false; //Als hier al geweest zijn dan moeten we terug
      }
  }
}