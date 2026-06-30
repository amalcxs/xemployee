// Register Validator
// Placeholder - implementation pending

import { z } from "zod";

export const registerValidator = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100).optional(),
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
});

export type RegisterValidatorInput = z.infer<typeof registerValidator>;
