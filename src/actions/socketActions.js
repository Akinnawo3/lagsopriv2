import io from "socket.io-client";
import api from "../environments/environment";
import {configureStore} from "../store";
import Cookies from "universal-cookie";
import socketMessageActions from "./socketMessageActions";

const cookies = new Cookies();

const environment = configureStore?.getState()?.authUser?.userProfile?.data_mode;
let url;
let path;
url = environment === "live" ? "https://admin-socket-service-microservices.api.lagosride.com/" : "https://staging-server.lagosride.com";
path = environment === "live" ? null : "/admin-socket-service";
const token = cookies.get("user_id");

const appSocket = {};
appSocket.createConnection = () => {
  if (appSocket.io && appSocket.io.connected) return;
  appSocket.io = io.connect(`${url}?user_type=admin&token=${token}`, {path, transports: ["websocket"]});

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
