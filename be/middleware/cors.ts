import { Middleware } from "@oak/oak";

const cors: Middleware = (ctx, next) => {
    const isDev = Deno.env.get('ENV') === 'DEV';
    console.log(Deno.env.get('ENV'))
    if (isDev) {
        ctx.response.headers.set('Access-Control-Allow-Origin', '*')
    }
    next();
}

export default cors;