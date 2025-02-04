import { Message, MessagePayload } from "@shared/types/types.ts";
import { Context, State } from "@oak/oak";


export interface WebSocketHandler<
  // deno-lint-ignore no-explicit-any
  S extends State = Record<string, any>,
  T extends Context = Context<S>,
> {
  (context: T, socket: WebSocket): void;
}

let messages: Message[] = [];

const userDict: Record<string, string> = {
  "": "",
  "123": "Janek",
  "abc": "Bodzio",
};

const handleSocket: WebSocketHandler = (ctx, socket) => {

  socket.addEventListener("open", (event: WebSocketEventMap["open"]) => {
    messages = [];
    console.log(event.target);
    console.log("a client connected!");
  });

  socket.addEventListener("message", (event: MessageEvent<string>) => {
    const payload: MessagePayload = JSON.parse(event.data);
    const completeMessage: Message = {
      ...payload,
      timeStamp: Date.now(),
      recipentName: userDict[payload.recipentId ?? ""],
      authorId: event.origin,
      authorName: "duduś",
    };
    messages.push(completeMessage);
    socket.send(JSON.stringify(messages));
  });

  socket.addEventListener("error", (event) => {
    console.error(event);
  });

  socket.addEventListener("close", () => {
    messages = [];
    console.log("a client disconnected!");
  });
}

export default handleSocket;
