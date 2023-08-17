import { createContext } from "react";
import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? undefined
    : "http://192.168.1.233:4000";

const socket = io(URL as string);

export const SocketContext = createContext(socket);
