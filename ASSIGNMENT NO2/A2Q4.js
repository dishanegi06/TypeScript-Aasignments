var chatroom1 = new Map([
    ['Mitchell', 'Hola Amigos!'],
    ['Phil', 'yello!'],
    ['Luke', 'Cool!']
]);
var chatroom2 = new Map([
    ['Gloria', 'Gracius!'],
    ['Joe', 'ok'],
    ['Alex', 'hello']
]);
console.log("Printing all users and mesaages of first chatroom");
chatroom1.forEach(function (value, key, map) {
    console.log(key + ": " + value);
});
console.log("Printing all users and mesaages of first chatroom");
chatroom2.forEach(function (value, key, map) {
    console.log(key + ": " + value);
});
