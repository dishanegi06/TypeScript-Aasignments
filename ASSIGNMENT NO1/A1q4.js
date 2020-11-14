var names = ['Tom', 'Ivan', 'Jerry'];
names = names.map(function (name) { return ({
    name: name,
    length: name.length
}); });
console.log(names);
