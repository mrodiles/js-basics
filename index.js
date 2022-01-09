/// Exercise 3 FizzBuzz
/// Divisible by 3 => Fizz
/// Divisible by 5 => Buzz
//Divisible by 3 & 5 => FizzBuzz
/// Not Divisible by 3 or 5 => input
/// Not a number => "not a number"

const output = fizzBuzz(false);
console.log(output);
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}


