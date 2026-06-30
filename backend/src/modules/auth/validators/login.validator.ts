// Login Validator
// Placeholder - implementation pending

import { z } from "zod";

export const loginValidator = z.object({
  email: z.string().email().max(255),
  password: z.string().min(1).max(128),
});

export type LoginValidatorInput = z.infer<typeof loginValidator>;
