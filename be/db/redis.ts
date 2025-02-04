import { RedisClient } from "https://deno.land/x/r2d2@v2.0.0/mod.ts";

const redisConn = await Deno.connect({ port: Number(Deno.env.get("REDIS_PORT"))});
const redisClient = new RedisClient(redisConn);

await redisClient.sendCommand(["SET", "hello", "world"]);
await redisClient.sendCommand(["GET", "hello"]);

