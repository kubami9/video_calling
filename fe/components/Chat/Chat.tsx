import { Message } from "@shared/types/types.ts";

type ChatParams = {
  messages: Message[] | undefined;
};

const Chat = (params: ChatParams) => {
  const { messages } = params;
  const dateFormat = Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  });

  const chatMessages = messages?.sort((a, b) => a.timeStamp - b.timeStamp)
    .map(
      (message) => (
        <li
          key={message.timeStamp}
          style={{
            paddingLeft: 10,
            borderLeft: "5px solid",
            borderColor: message.authorId === "123" ? "#ba55d3" : "#eee600",
            borderRadius: "5px",
          }}
        >
          {`[${
            dateFormat.format(message.timeStamp)
          }] ${message.authorName}: ${message.text}`}
        </li>
      ),
    );

  return (
    messages
      ? (
        <ul>
          {chatMessages}
        </ul>
      )
      : "loading..."
  );
};

export default Chat;
