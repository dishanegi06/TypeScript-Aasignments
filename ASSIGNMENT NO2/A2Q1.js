var FibonnaciSeries = /** @class */ (function () {
    function FibonnaciSeries() {
    }
    FibonnaciSeries.prototype.next = function (n) {
        var final;
        var previousNo;
        previousNo = 0;
        var currentNo;
        currentNo = 1;
        for (var i = 0; i < n; i++) {
            //console.log(previousNo);
            final = previousNo + currentNo;
            previousNo = currentNo;
            currentNo = final;
        }
        return final;
    };
    ;
    return FibonnaciSeries;
}());
var fibo1 = new FibonnaciSeries();
console.log(fibo1.next(3));
