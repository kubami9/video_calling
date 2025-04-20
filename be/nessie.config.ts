import {
    ClientPostgreSQL,
    NessieConfig,
} from "https://deno.land/x/nessie@2.0.11/mod.ts";

export const client = new ClientPostgreSQL({
    database: "video_calling",
    port: 5432,
    user: "kuba",
    password: "1234",
});

/** This is the final config object */
const config: NessieConfig = {
    client,
    migrationFolders: ["./be/db/migrations"],
    seedFolders: ["./be/db/seeds"],
};

export default config;
