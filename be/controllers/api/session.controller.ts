import { Router } from "@oak/oak";

const sessionRouter = new Router();

// POST /session
sessionRouter.post('/', (ctx) => {
    const { username, password } = ctx.request.body;

})

export default sessionRouter;