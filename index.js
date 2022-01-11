//Exercise 4 Demerit Points//
//Speed Limit = 70
// 5 over = 1 point
//Math.floor(1.3)
// driver gets more than 12 points license is suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License Suspended 👮‍♂️");
  else console.log("Points", points);
}

checkSpeed(181);
