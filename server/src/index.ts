import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    driver: PostgreSqlDriver,
    dbName: "lireddit",
    user: "postgres",
    password: " ",
    host: "localhost",
    port: 5432,
    debug: !__prod__,
    entities: [Post],
  });

  console.log("✅ Database connected successfully!");

  // ✅ Fork a new context-specific EntityManager
  const em = orm.em.fork();

  const post = em.create(Post, { title: "My first post" });
  await em.persistAndFlush(post);

  console.log("✅ Post created successfully:", post);

  const posts = await em.find(Post, {});
  console.log("📜 All posts in DB:", posts);
};

main().catch((err) => console.error("❌ Error:", err));
