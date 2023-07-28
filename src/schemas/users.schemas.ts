import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
});

const requestUserSchema = userSchema.omit({
  id: true,
});

const responseUserSchema = userSchema.omit({ password: true });

const usersArraySchema = z.array(responseUserSchema);

const updateUserSchema = userSchema.omit({
  id: true,
});

const updateUserRequestSchema = userSchema
  .omit({
    id: true,
  })
  .partial();

export {
  requestUserSchema,
  responseUserSchema,
  userSchema,
  usersArraySchema,
  updateUserSchema,
  updateUserRequestSchema,
};
