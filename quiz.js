// console.log(questions);

// let a = 5;
// let b = 6;
// let c = 0;

// c = a;
// a = b;
// b = c;

// console.log(Math.floor(Math.random() * 10));

function shuffle(questions) {
  for (let i = 0; i < 10000; i++) {
    const randomNumber1 = Math.floor(Math.random() * questions.length);
    const randomNumber2 = Math.floor(Math.random() * questions.length);

    const temp = questions[randomNumber1];
    questions[randomNumber1] = questions[randomNumber2];
    questions[randomNumber2] = temp;
  }
}

shuffle(questions);
console.log(questions);
