import * as z from 'zod';

export const schema = z.object({
  firstName: z
    .string()
    .min(1, 'Required field')
    .min(2, 'The firstName must have at least 2 characters')
    .max(50),
  lastName: z
    .string()
    .min(1, 'Required field')
    .min(2, 'The lastName must have at least 2 characters')
    .max(50),
  email: z
    .string()
    .max(320, 'Maximum length is 320 characters')
    .min(1, 'Required field')
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: 'Email is not valid',
    }),
  phoneNumber: z
    .string()
    .min(1, 'Required field')
    .min(10, 'The phone number must have at least 10 digits.')
    .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, 'Invalid phone format'),
  userMessage: z
    .string()
    .min(1, 'Required field')
    .min(10, 'The message must have at least 10 digits.')
    .max(1000),
});

export type InferSchema = z.infer<typeof schema>;
