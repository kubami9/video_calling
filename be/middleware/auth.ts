import { Middleware } from "@oak/oak/middleware";
import { STATUS_CODE } from "jsr:@oak/commons@1/status";

/**
 * Authorization middleware
 * Steps:
 * 1. Get user's ID from the cookie
 * 2. Check user's ID against their IP (Redis?), if it exists but no match, reject and remove the record with this IP
 * 3. If all good then refresh the session timer, (update user's object??) and proceed with the request
 */
const auth: Middleware = (ctx, next) => {
    let validId = false;
    const id = ctx.cookies.get('id');
    const ip = ctx.request.ip;
    const matchedId = id; // this is a mock, get id for the current ip if it exists
    if (matchedId) {
        if (matchedId === id) {
            next();
        }
        ctx.throw(STATUS_CODE.Unauthorized) //401 
    } else {
        // add a key value pair of current id and ip??
    }

}

export default auth;