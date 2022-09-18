// Type Definition
let left: number;
let right: number;
type tCalc = (left: number, right: number) => number;
let Calc: tCalc;
// Value Assignment
left = 20;
right = 40;
function Calculate(mt: tCalc) {
	console.log(mt(left, right));
}
Calculate((a, b) => a + b); //mt Definition
Calculate((a, b) => a - b); //mt Definition
Calculate((a, b) => a * b); //mt Definition
Calculate((a, b) => a / b); //mt Definition
Calculate((a, b) => a ** b); //mt Definition
Calculate((a, b) => a % b); //mt Definition
Calculate((a, b) => a ^ b); //mt Definition
