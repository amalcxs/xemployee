// Forgot Password Validator
// Placeholder - implementation pending

import { z } from "zod";

export const forgotPasswordValidator = z.object({
  email: z.string().email().max(255),
});

export type ForgotPasswordValidatorInput = z.infer<typeof forgotPasswordValidator>;
