var userFriends = function (username) {
    var myFriends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        myFriends[_i - 1] = arguments[_i];
    }
    console.log(username);
    console.log(myFriends);
};
var username = "dis";
userFriends(username, 'a', 't', 'w');
userFriends(username, 'a', 't', 'w');
userFriends(username, 'a', 't', 'w');
userFriends(username, 'a', 't', 'w');
userFriends(username, 'a', 't', 'w');
