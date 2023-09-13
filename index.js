let data = process.argv;
let operator= data[2];
let a = Number(data[3]); 
let b = Number(data[4]); 

switch (operator) {
  case "addition":
    console.log(a + b);
    break;
  case "subtraction":
    console.log(a - b);
    break;
  case "multiplication":
    console.log(a * b);
    break;
  case "division":
    console.log(a / b);
    break;
  case "modulus":
    console.log(a % b);
    break;
  default:
    console.log("Invalid operator");
}