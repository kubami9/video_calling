import { Application, Router } from "@oak/oak";
import handleSocket from "./controllers/ws/ws.controller.ts";
import auth from "./middleware/auth.ts";
import logger from "./middleware/logger.ts";
import apiRouter from "./controllers/api/mod.ts";
import cors from "./middleware/cors.ts";

const router = new Router();

// deno-lint-ignore require-await
router.get("/ws", async (ctx) => {
  console.log("RECEIVED WS");
  if (!ctx.isUpgradable) {
    ctx.throw(501); // code for: Not implemented
  }
  console.log(ctx);
  const sock = ctx.upgrade();
  handleSocket(ctx, sock);
});
router.get("/", (ctx) => {
  console.log("RECEIVED");
  ctx.response.body = "Hello world";
});

const app = new Application();
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(auth);
app.use(cors);
app.use(logger.logger);
app.use(logger.responseTime);


app.listen({ port: 8000 });
