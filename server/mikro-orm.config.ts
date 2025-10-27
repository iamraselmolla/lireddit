import { defineConfig } from "@mikro-orm/postgresql";
import { Post } from "./src/entities/Post";

export default defineConfig({
  dbName: "lireddit",
  user: "postgres",
  password: " ",
  host: "localhost",
  port: 5432,
  entities: [Post],
  debug: true,
});
