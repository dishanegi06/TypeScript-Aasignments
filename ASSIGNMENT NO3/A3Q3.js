function printAll(PrintableObj) {
    console.log(PrintableObj);
}
var circle = {
    objName: "Shape",
    radius: 10
};
var employee = {
    fname: "A",
    lname: "B",
    id: 10
};
console.log("Circle object");
printAll(circle);
console.log("Employee object");
printAll(employee);
