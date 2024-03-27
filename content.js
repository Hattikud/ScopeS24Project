// TOTAL ASSIGNMENTS
// TOTAL SUBMITTED
// TOTAL UNSUBMITTED
// AVERAGE
// LOWEST
// HIGHEST
// BIGGEST JUMP
// BIGGEST DROP

const scoresNodeList = document.querySelectorAll(".submissionStatus--score");
const scores = Array.from(scoresNodeList);
scores.reverse();

let scoreArr = scores[0].innerHTML.split(" / ");
let received = parseFloat(scoreArr[0]);
let total = parseFloat(scoreArr[1]);
let curGrade = received / total;

let totalPointsEarned = received;
let totalPointsAvailable = total;
let lowest = curGrade;
let highest = curGrade;
let biggestJump = 0.0
let biggestDrop = 0.0;
let prevGrade = curGrade;

for (let i = 1; i < scores.length; i++) {
    const score = scores[i];
    scoreArr = score.innerHTML.split(" / ");
    received = parseFloat(scoreArr[0]);
    total = parseFloat(scoreArr[1]);
    curGrade = received / total;

    totalPointsEarned += received;
    totalPointsAvailable += total;
    lowest = Math.min(lowest, curGrade);
    highest = Math.max(highest, curGrade);

    const currentJump = curGrade - prevGrade;
    biggestJump = Math.max(biggestJump, currentJump);
    biggestDrop = Math.min(biggestDrop, currentJump);

    prevGrade = curGrade;
}

const average = totalPointsEarned / totalPointsAvailable;

console.log(average, lowest, highest, biggestJump, biggestDrop);
