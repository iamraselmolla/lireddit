import { MikroORM } from "@mikro-orm/core";
import {} from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    dbName: "lireddit",
    user: "postgres",
    password: " ",
    debug: !__prod__,
    type: "postgresql",
  });
};
main().catch((err) => {
  console.error(err);
});

console.log("Server is running on http://localhost:4000");
