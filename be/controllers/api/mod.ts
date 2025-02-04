import { Router } from "@oak/oak";
import sessionRouter from "./session.controller.ts";

const apiRouter = new Router();

apiRouter
    .use("/session", sessionRouter.routes(), sessionRouter.allowedMethods());

export default apiRouter;