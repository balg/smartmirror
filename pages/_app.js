import App from "next/app";
import React from "react";
import WebSocketProvider from "../contexts/WebSocketProvider/WebSocketProvider";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <WebSocketProvider>
        <Component {...pageProps} />
      </WebSocketProvider>
    );
  }
}
