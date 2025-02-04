import { User } from "../schemas/user.schema.ts";

class UserService {
    user: User;
    constructor(user: User) {
        this.user = user;
    }
}

export default UserService;