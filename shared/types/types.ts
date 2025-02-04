export type Message = {
  authorId: string;
  authorName: string;
  text: string;
  timeStamp: number;
  recipentId: string;
  recipentName: string;
};

export type MessagePayload = Pick<Message, "text" | "recipentId">;

export type User = {
  id: number;
  name: string;
};

export type Credentials = {
  email: string;
  password: string;
};
