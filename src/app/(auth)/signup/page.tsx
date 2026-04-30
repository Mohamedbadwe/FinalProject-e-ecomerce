"use client";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { MySchema, registerSchemaType } from "@/Schema/auth.Schems";
import { userData } from "@/action/auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle, FaStar, FaTruck, FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import { FaShield } from "react-icons/fa6";
import Image from "next/image";
import img from "../../../assets/images/7be87acff8878d0ff905ef9dcd5bf7d2fd7a6c6f.png";

export default function page() {
  const Router = useRouter();
  const form = useForm<registerSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(MySchema),
  });

  const { register, handleSubmit, control } = form;

  async function Mysubmit(data: registerSchemaType) {
    console.log(data);

    const isregister = await userData(data);
    if (isregister) {
      toast.success("succues", { duration: 3000, position: "top-center" });

      setTimeout(() => {
        Router.push("/home");
      }, 3000);
    } else {
      toast.error("fail", { duration: 3000, position: "top-center" });
    }
  }
  return (
    <>
      <div className="grid lg:grid-cols-2 w-[80%] mx-auto gap-12">
        <div className="my-6">
          <h1 className="font-['Font_1'] font-bold text-[36px] leading-10 tracking-normal">
            Welcome to <span className="text-[#16A34A]">FreshCart</span>
          </h1>
          <p className="max-w-130 font-['Font_1'] font-medium text-[20px] leading-7 tracking-normal text-[#364153] ">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>
          <div>
            <div className="flex items-center mt-3 gap-3">
              <div className="size-11 bg-[#BBF7D0] rounded-full flex justify-center items-center">
                <FaStar className="w-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <h4 className="font-['Font_1'] font-semibold text-[18px] leading-7 tracking-normal text-[#364153]">
                  Premium Quality
                </h4>
                <p className="font-['Font_1'] font-medium text-base leading-6 tracking-normal text-[#4A5565]">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-3 gap-3">
              <div className="size-11 bg-[#BBF7D0] rounded-full flex justify-center items-center">
                <FaTruck className="w-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <h4 className="font-['Font_1'] font-semibold text-[18px] leading-7 tracking-normal text-[#364153]">
                  Fast Delivery
                </h4>
                <p className="font-['Font_1'] font-medium text-base leading-6 tracking-normal text-[#4A5565]">
                  Same-day delivery available in most areas
                </p>
              </div>
            </div>
            <div className="flex items-center mt-3 gap-3">
              <div className="size-11 bg-[#BBF7D0] rounded-full flex justify-center items-center">
                <FaShield className="w-[22.5px] text-[#16A34A]" />
              </div>
              <div>
                <h4 className="font-['Font_1'] font-semibold text-[18px] leading-7 tracking-normal text-[#364153]">
                  Secure Shopping
                </h4>
                <p className="font-['Font_1'] font-medium text-base leading-6 tracking-normal text-[#4A5565]">
                  Your data and payments are completely secure
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 bg-white p-4 rounded-[6px] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
            <div className="flex items-center mt-3 gap-2">
              <div>
                <Image
                  src={img}
                  alt="image"
                  width={48}
                  height={48}
                  className="size-12"
                />
              </div>
              <div>
                <h4 className="font-['Font_1'] font-medium text-base leading-6 tracking-normal text-[#364153]">
                  Sarah Johnson
                </h4>
                <div className="flex text-[#FFDF20] ">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}{" "}
                </div>
              </div>
            </div>
            <p className="font-['Font_1'] font-medium italic text-base leading-6 tracking-normal text-[#4A5565] mt-4">
              "FreshCart has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
              Highly recommend!"
            </p>
          </div>
        </div>

        <div className="w-full  mx-auto my-6 bg-white p-6 rounded-xl shadow-md border">
          <h1 className="font-['Font_1'] font-semibold text-[30px] leading-9 tracking-[0] text-center align-middler">
            Create Your Account
          </h1>
          <p className="font-['Font_1'] font-medium mb-4 text-[16px] leading-6 tracking-[0] text-center align-middle">
            Start your fresh journey with us today
          </p>

          <div className="flex gap-4 mb-4">
            <div className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <FaGoogle className="text-xl text-[#E7000B] " />
              <p>Google</p>
            </div>

            <div className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <FaFacebook className="text-xl text-blue-600" />
              <p>Facebook</p>
            </div>
          </div>

          <div className="flex items-center justify-center my-3">
            <span className="text-gray-400 text-sm">or</span>
          </div>

          <form
            onSubmit={handleSubmit(Mysubmit)}
            className="flex flex-col gap-4"
          >
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="nameInput">Name*</FieldLabel>

                  <Input
                    id="nameInput"
                    type="text"
                    {...field}
                    className="bg-gray-50 border rounded-md h-10"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="emailInput">Email*</FieldLabel>

                  <Input
                    id="emailInput"
                    type="email"
                    {...field}
                    className="bg-gray-50 border rounded-md h-10"
                    aria-invalid={fieldState.invalid}
                    placeholder="ali@example.com"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="passwordInput">Password*</FieldLabel>

                  <Input
                    id="passwordInput"
                    type="password"
                    {...field}
                    className="bg-gray-50 border rounded-md h-10"
                    aria-invalid={fieldState.invalid}
                    placeholder="Create a strong password"
                  />

                  <span className="text-xs text-gray-500">
                    Must be at least 8 characters.
                  </span>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rePasswordInput">
                    Confirm Password*
                  </FieldLabel>

                  <Input
                    id="rePasswordInput"
                    type="password"
                    {...field}
                    className="bg-gray-50 border rounded-md h-10"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm your password"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phoneInput">Phone Number*</FieldLabel>

                  <Input
                    id="phoneInput"
                    type="text"
                    {...field}
                    className="bg-gray-50 border rounded-md h-10"
                    aria-invalid={fieldState.invalid}
                    placeholder="+1 234 567 890"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p className="font-medium text-[14px] leading-5">I agree to the <span className="text-[#16A34A]">Terms of Service</span> and <span className="text-[#16A34A]">Privacy Policy</span>*</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-md text-lg font-semibold cursor-pointer"
            >
           <FaUserPlus /> Create My Account
            </Button>
            <div className="text-center flex justify-center font-medium text-[16px] leading-5 align-middle py-4 ">
              <p>Already have an account? </p>
              <Link href="/login" className="text-[#16A34A]">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
