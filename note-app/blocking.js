let getUser = require('./getUser');

getUser('123', function (user1) {
    console.log('user1', user1);
});

getUser('321', function (user2) {
    console.log('user2', user2);
});

let sum = 1 + 2;
console.log('The sum is ' + sum)