import { Injectable } from "https://deno.land/x/inject@v0.1.2/decorators.ts";
import { ClientPostgreSQL } from "https://deno.land/x/nessie@2.0.11/mod.ts";
import { QueryT } from "https://deno.land/x/nessie@2.0.11/types.ts";

@Injectable()
class DBService {
    client: ClientPostgreSQL;
    constructor(client: ClientPostgreSQL) {
        this.client = client;
    }
    query(query: QueryT) {
        return this.client.query(query);
    }
    close() {
        return this.client.close();
    }
}

export default DBService;