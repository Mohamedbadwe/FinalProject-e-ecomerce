import * as zod from "zod"


export const checkoutSchem = zod.object({
  details: zod.string().nonempty("details is requrid"),

  phone: zod.string("phone").nonempty("phone is requrid").regex(/^01[0-2,5][0-9]{8}$/, "invaild phone"),
  city : zod.string().nonempty()
});


export type checkoutType = zod.infer<typeof checkoutSchem>;
