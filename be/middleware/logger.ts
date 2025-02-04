import { Middleware } from "@oak/oak/middleware";

const logger: Middleware = async (ctx, next) => {
    await next();
    const responseTime = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${responseTime}ms`)
}

const responseTime: Middleware = async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set('X-Response-Time', `${ms}ms`)
}

export default { logger, responseTime };