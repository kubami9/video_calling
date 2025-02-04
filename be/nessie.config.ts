import {
    ClientPostgreSQL,
    NessieConfig,
} from "https://deno.land/x/nessie@2.0.11/mod.ts";

const client = new ClientPostgreSQL({
    database: "video_calling",
    hostname: "localhost",
    port: 5432,
    user: "kuba",
    password: "",
});

/** This is the final config object */
const config: NessieConfig = {
    client,
    migrationFolders: ["./db/migrations"],
    seedFolders: ["./db/seeds"],
};

export default config;
