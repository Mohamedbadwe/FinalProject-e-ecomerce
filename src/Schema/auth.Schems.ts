import * as zod from "zod";

export const MySchema = zod
  .object({
    name: zod
      .string("name must be text")
      .nonempty("requrid text")
      .min(3, "name is 3 chartcrs")
      .max(10, "name is 10 chartcrs"),
    email: zod
      .email("invaid email")
      .nonempty("email is requrid")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "invaild email",
      ),
    phone: zod
      .string("phone ")
      .nonempty("phone is requrid")
      .regex(/^01[0-2,5][0-9]{8}$/, "invaild phone"),
    password: zod
      .string()
      .nonempty()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "invaild password",
      ),
    rePassword: zod.string().nonempty(),
  })
  .refine(
    (object) => {
      return object.password === object.rePassword;
    },
    {
      error: "password not match repassword",
      path: ["rePassword"],
    },
  );

export type registerSchemaType = zod.infer<typeof MySchema>;






export const LoginMySchema = zod.object({
  email: zod
    .email("invaid email")
    .nonempty("email is requrid")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invaild email"),

  password: zod
    .string()
    .nonempty()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "invaild password",
    ),
});

export type LoginSchemaType = zod.infer<typeof LoginMySchema>;
