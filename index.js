const userInfo = require('./information');

var cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hi, my name is ${userInfo.firstName} ${userInfo.lastName} and I'm in the campus ${userInfo.campus}`,
    e: "oO",
    T: "U "
}));

