import { Message } from "@shared/types/types.ts";
import { Injectable } from "https://deno.land/x/inject/mod.ts";

@Injectable()
class MessagesService {
  messages: Message[];
  constructor() {
    // this.message = getFromDBService();
    this.messages = [];
  }
}

export default MessagesService;
