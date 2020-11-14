var printcapitalNames = function () {
    var m = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        m[_i] = arguments[_i];
    }
    for (var i in m) {
        console.log(m[i].toUpperCase());
    }
};
var display = ["disha", "hi", "ok", "done"];
printcapitalNames.apply(void 0, display);
