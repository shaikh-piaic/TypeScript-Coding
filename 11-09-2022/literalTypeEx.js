function Calc(left, right, opt) {
    var result;
    switch (opt) {
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "*":
            result = left * right;
            break;
        case "/":
            result = left / right;
            break;
    }
    return result;
}
console.log(Calc(106320, 398765, "+"));
console.log(Calc(100, 40, "-"));
console.log(Calc(800, 40, "*"));
console.log(Calc(1200, 40, "/"));
