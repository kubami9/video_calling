export const startWSConnection = (url: string | URL) => {
  const socket = new WebSocket(url);

  socket.addEventListener("open", () => {
    console.log("Connection opened!");
  });

  socket.addEventListener("message", (event) => {
    console.log(event.data);
  });

  socket.addEventListener("error", (event) => {
    console.error(event);
  });

  return socket;
};

export const stopWSConnection = (websocket: WebSocket) => {
  websocket.close();
};
