import { Injectable } from "https://deno.land/x/inject/mod.ts";
import User from "../models/user.model.ts";

@Injectable()
class UserService {
    user: User;
    constructor(user: User) {
        this.user = user;
    }
}

export default UserService;