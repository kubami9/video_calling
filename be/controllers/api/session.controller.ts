import { Router } from "@oak/oak";
import { hash, verify } from "@felix/bcrypt";
import { STATUS_CODE } from "jsr:@oak/commons@1/status";
import User from "../../models/user.model.ts";


const sessionRouter = new Router();

// POST /session
sessionRouter.post('/', async (ctx) => {
    const { username, password } = await ctx.request.body.json();
    const hashed = 'get from db';
    const isMatch = await verify(password, hashed);


})

sessionRouter.post('/new', async (ctx) => {
    const { username, password } = await ctx.request.body.json();
    const userExists = false; // TODO: check if user exists
    if (!userExists) {
        const hashed = await hash(password);
        const user = new User(username, hashed);
        
    }
    ctx.response.status = STATUS_CODE.Created;
})

export default sessionRouter;