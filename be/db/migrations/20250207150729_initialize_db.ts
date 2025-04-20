import { AbstractMigration, Info, ClientPostgreSQL } from "https://deno.land/x/nessie@2.0.11/mod.ts";

export default class extends AbstractMigration<ClientPostgreSQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        const createUsers 
            = "CREATE TABLE users (id integer PRIMARY KEY, username varchar(32), salt varchar(22), password varchar(60))";
        const createMessages
            = "CREATE TABLE messages (id integer PRIMARY KEY, author integer, recipent integer, content varchar(4096), date timestamptz)";
        
        this.client.queryArray(createUsers);
        this.client.queryArray(createMessages);
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        const dropUsers = "DROP TABLE users";
        const dropMessages = "DROP TABLE messages";
        this.client.queryArray(dropUsers)
        this.client.queryArray(dropMessages);
    }
}
