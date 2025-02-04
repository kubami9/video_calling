import { Message } from "@shared/types/types.ts";

class MessagesService {
  messages: Message[];
  constructor() {
    // this.message = getFromDBService();
    this.messages = [];
  }
}

export default MessagesService;
