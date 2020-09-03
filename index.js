// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 is a function that declares the count variable within itself and then returns the result of the
 * nested function counter(), which references count from the original function and adds 1. Counter2 references the global
 * variable count and then returns count plus one. The difference is where the variable count is referenced and how they excute
 * the calculation.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * They both are using closure, because both functions are accessing variables outside of their scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * If you did not need to store the count variable globally or needed to conserve memory, use counter1.
 * If you wanted to counter to be persistant and public use counter2.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    return Math.floor(Math.random() * Math.floor(3));
}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){
  let score = {"Home" : 0, "Away": 0}
  let count = 0;
  while(numberOfInnings > 0){
    score.Home = score.Home + inning();
    score.Away = score.Away + inning();
    numberOfInnings--;
  }
  return score;
}

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(inning, home, away){
  home += inning();
  away += inning();
}


function scoreboard(getInningScore, inning, numberOfInnings) {
  let home = 0;
  let away = 0;
  let count = 0;
  let th = "";

  while(numberOfInnings > 0){
    getInningScore(inning, home, away)
    count++;
    if(count == 1){
      th = "1st";
    }
    else if(count == 2){
      th = "2nd";
    }
    else if(count == 3){
      th = "3rd";
    }
    else{
      th = count + "th";
    }
    console.log(th + " inning: " + away + " - " + home);
    numberOfInnings--;
  }
  console.log("Final Score: " + away + " - " + home);
}

scoreboard(getInningScore, inning, 9)

