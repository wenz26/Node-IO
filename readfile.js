var fs = require("fs");

var buffer = Buffer.alloc(30);
fs.open("hello2.txt", "r", function (err, fd) {
    if (!err){
        fs.read(fd, buffer, 0, 27, null, function (err1, buffer) {
            if (!err){
                console.log(buffer.toString())
            } else {
                console.log(err1)
            }
        })
    }
})