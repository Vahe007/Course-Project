const reader = require('readline-sync');
const problem = require('./Utils');
const p1 = reader.question("Please insert the name of first player: ");
const p2 = reader.question("Please insert the name of second player: ");
const stars = "****";
let num = reader.question(`Dear ${p1}, please insert the number: `);
while (num === "" || num.length !== 4) {
    num = reader.question(`Dear ${p1}, please enter a 4 digit number in order to continue: `);
}
let guess1 = reader.question(`Dear ${p2}, please guess ${stars} number: `);
while (guess1 === "" || guess1.length !== 4) {
    guess1 = reader.question(`Dear ${p2}, please guess the 4 digit number: `)
}
problem.guessNum(num, guess1);

