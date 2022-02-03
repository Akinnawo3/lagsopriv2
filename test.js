const io = require("socket.io-client");
const appSocket = {};
appSocket.createConnection = () => {
  appSocket.io = io.connect(`https://staging-server.lagosride.com`, {path: "/admin-socket", transports: ["websocket"]});

  appSocket.io.on("connect", () => {
    console.log("Connected");
  });
  appSocket.io.on("connect_error", (err) => {
    console.log("Connect error" + err);
  });
  appSocket.io.on("error", (err) => {
    console.log("Error" + err);
  });
  appSocket.io.on("disconnect", (err) => {
    console.log("Disconnect" + err);
  });

  appSocket.io.on("msg", (data) => {
    console.log(data);
  });
};
appSocket.createConnection();
