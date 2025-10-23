import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    driver: PostgreSqlDriver,
    dbName: "lireddit",
    user: "postgres",
    password: " ", // use actual password
    host: "localhost",
    port: 5432,
    debug: !__prod__,
    entities: [Post],
  });

  console.log("✅ Database connected successfully!");

  const createPost = orm.em.create(Post, { title: "my first post" });
  await orm.em.persistAndFlush(createPost);
  console.log("✅ Post created successfully:", createPost);

  const posts = await orm.em.find(Post, {});
  console.log("📜 All posts in DB:", posts);
};

main().catch((err) => {
  console.error("❌ Error:", err);
});

console.log("Server is running on http://localhost:4000");
