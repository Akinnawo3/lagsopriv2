import io from "socket.io-client";
import api from "../environments/environment";
import {configureStore} from "../store";
import Cookies from "universal-cookie";
import socketMessageActions from "./socketMessageActions";

const cookies = new Cookies();

// console.log(configureStore().getState().)
const token = cookies.get("user_id");

const appSocket = {};
appSocket.createConnection = () => {
  if (appSocket.io && appSocket.io.connected) return;
  appSocket.io = io.connect(`https://staging-server.lagosride.com?user_type=admin&token=${token}`, {path: "/admin-socket-service", transports: ["websocket"]});

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
    socketMessageActions(data);
  });
};

appSocket.disconnect = () => {
  appSocket.io.disconnect();
};

export default appSocket;
