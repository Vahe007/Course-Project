const reader = require('readline-sync');

module.exports = {

    guessNumHelper: function (num1, num2) {
        num1 = Array.from(num1);
        num2 = Array.from(num2);
        let res = [];
        num2.forEach(item1 => {
            if (num1.filter(item => item === item1).length > 0) {
                res.push(num1.filter(item => item === item1));
            }

        });
        return res;
    },
    guessNum: function (num, guess1) {
        while (num !== guess1) {
            let count = 0;
            let matches;
            for (let i = 0; i < num.length; i++) {
                if (num[i] === guess1[i]) {
                    count++;
                }
            }
            matches = this.guessNumHelper(num, guess1).length;
            console.log(`${matches} digit(s) is/are guessed correctly, out of those ${count} is/are only placed correctly`);
            guess1 = reader.question("Try one more time: ");
        }

        if (num === guess1) {
            console.log(`You correctly guessed the ${num} number`);
        }
    },
}