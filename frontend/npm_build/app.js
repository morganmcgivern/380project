const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);

Http.listen(3000, () => {
    console.log("Listening at :3000...");
});

var sentence = {
    text:"The sentence!"
};

Socketio.on("connection", socket => {
    socket.emit("sentence", sentence);
});
