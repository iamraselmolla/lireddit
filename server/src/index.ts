import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init(); // ✅ loads mikro-orm.config.ts automatically

  console.log("✅ Database connected successfully!");

  // ✅ Always fork to create context-specific EM
  const em = orm.em.fork();

  const post = em.create(Post, { title: "My first post" });
  await em.persistAndFlush(post);

  console.log("✅ Post created successfully:", post);

  const posts = await em.find(Post, {});
  console.log("📜 All posts in DB:", posts);
};

main().catch((err) => console.error("❌ Error:", err));
