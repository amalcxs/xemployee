import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";

const app = Fastify({
  logger: true,
});

await app.register(cors);
await app.register(cookie);

app.get("/", async () => {
  return "Hello AI Employee";
});

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST ?? "0.0.0.0";

try {
  await app.listen({ port, host });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
