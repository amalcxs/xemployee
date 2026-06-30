import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

export const corsPlugin = async (fastify: FastifyInstance) => {
  await fastify.register(cors, {
    origin: true, // Allow all origins for dev, customize for production as needed
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  });
};
export default corsPlugin;
