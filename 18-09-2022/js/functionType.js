"use strict";
// Type Definition
let left;
let right;
let Calc;
// Value Assignment
left = 20;
right = 40;
function Calculate(mt) {
    console.log(mt(left, right));
}
Calculate((a, b) => a + b); //mt Definition
Calculate((a, b) => a - b); //mt Definition
Calculate((a, b) => a * b); //mt Definition
Calculate((a, b) => a / b); //mt Definition
Calculate((a, b) => a ** b); //mt Definition
Calculate((a, b) => a % b); //mt Definition
Calculate((a, b) => a ^ b); //mt Definition
