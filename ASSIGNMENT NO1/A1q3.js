var id = 1;
var title = "ABC";
var price = 123;
var Order = {
    id: id,
    title: title,
    price: price,
    printOrder: function () {
        return 10;
    },
    getPrice: function () {
        return 20;
    }
};
var copy = Object.assign(Order);
