// Reset Password Validator
// Placeholder - implementation pending

import { z } from "zod";

export const resetPasswordValidator = z
  .object({
    token: z.string().min(1),
    password: z.string().min(8).max(128),
    confirmPassword: z.string().min(8).max(128),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordValidatorInput = z.infer<typeof resetPasswordValidator>;
