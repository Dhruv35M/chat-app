const io = require("socket.io")(5000, {
  cors: {
    origin: "*",
  },
});

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", (message) => {
    const userName = users[socket.id];
    socket.broadcast.emit("receive", {
      message: message,
      name: userName,
    });
  });

  socket.on("disconnect", () => {
    const userName = users[socket.id];
    if (userName) {
      socket.broadcast.emit("left", userName);
      delete users[socket.id];
    }
  });
});
