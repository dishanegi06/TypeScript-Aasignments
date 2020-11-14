var add = function (num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2 === void 0) { num2 = 20; }
    console.log("\"Using Default values- \"The sum of " + num1 + " & " + num2 + " is :" + (num1 + num2));
};
add();
var add1 = function (num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2 === void 0) { num2 = 20; }
    console.log("\"Using given values- \"The sum of " + num1 + " & " + num2 + " is :" + (num1 + num2));
};
add1(45, 90);
