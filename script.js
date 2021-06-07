'use strict';

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log('Halo FizzBuzz!');
    else if (i % 3 === 0) console.log('Halo Fizz');
    else if (i % 5 === 0) console.log('Halo Buzz');
    else console.log(i);;
  }
}

fizzBuzz(50);

