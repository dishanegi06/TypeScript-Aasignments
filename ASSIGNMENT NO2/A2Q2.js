var count = 0;
function ArmstrongNumber() {
    return {
        next: function () {
            count++;
            return count < 2000 ?
                { value: getArmstrongNumber(count++), done: false } :
                { value: undefined, done: true };
        }
    };
}
function getArmstrongNumber(num) {
    for (var i = num; i <= 2000; i++) {
        var power = i.toString().length;
        var sum = 0;
        var n = i;
        while (n > 0) {
            var rem = n % 10;
            sum += Math.pow(rem, power);
            n = parseInt(n / 10);
        }
        if (sum === i) {
            count = sum;
            return i;
        }
    }
}
var myNumber = ArmstrongNumber();
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
console.log(myNumber.next());
