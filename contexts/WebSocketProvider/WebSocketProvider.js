import React, { createContext } from "react";
import io from "socket.io-client";

export const WebSocketContext = createContext({
  socket: null,
  sendMessage: (type, payload) => {},
});

const WebSocketProvider = (props) => {
  let socket = null;
  let context = null;

  const sendMessage = (type, payload) => {
    socket.emit("event://send-message", {
      type,
      payload,
    });
  };

  if (!socket) {
    console.log("Connecting to server");
    socket = io.connect("http://localhost:8000");

    socket.on("event://send-message", ({ type, payload }) => {
      console.log({ type, payload });
    });

    context = {
      socket,
      sendMessage,
    };
  }

  return (
    <WebSocketContext.Provider value={context}>
      {props.children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
