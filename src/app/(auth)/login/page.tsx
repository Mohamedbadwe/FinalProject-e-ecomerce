"use client";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  FaClock,
  FaFacebook,
  FaGoogle,
  FaShoppingCart,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import Link from "next/link";
import { LoginMySchema, LoginSchemaType } from "@/Schema/auth.Schems";
import { signIn } from "next-auth/react";
import { ShieldCheck } from "lucide-react";
import { FaShield } from "react-icons/fa6";
import img from "../../../assets/images/381609d78c4d97f9277837bc4bdf05035b888463.png";
import Image from "next/image";

export default function page() {
  const Router = useRouter();
  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginMySchema),
  });

  const { register, handleSubmit, control } = form;

  async function Mysubmit(data: LoginSchemaType) {
    console.log(data);

    const respose = await signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(respose);

    if (respose?.ok) {
      toast.success("Welcom back ❤️", {
        duration: 3000,
        position: "top-center",
      });

      setTimeout(() => {
        Router.push("/");
      }, 3000);
    } else {
      toast.error(respose?.error, { duration: 3000, position: "top-center" });
    }
  }
  return (
    <>
      <div className="grid lg:grid-cols-2 w-[90%] mx-auto items-start ">
        <div className="flex flex-col gap-5   h-fit  ">
          <div className="w-full">
            <Image
              src={img}
              alt="image"
              width={616}
              height={348}
              className="w-full h-auto block rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col gap-1 ">
            <h1 className="font-bold text-[30px] leading-9 text-center align-middle max-w-137.5 mx-auto">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h1>
            <p className="font-medium text-[18px] leading-7 text-center align-middle text-[#4A5565]">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>
            <div className="flex justify-center gap-16">
              <div className="flex items-center gap-1.5">
                <span>
                  <FaTruck  className="text-[#16A34A]" />
                </span>
                <p  className="font-medium text-[14px] leading-5 text-center align-middle text-[#6A7282]">Free Delivery</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span>
                  <FaShield  className="text-[#16A34A]" />
                </span>
                <p  className="font-medium text-[14px] leading-5 text-center align-middle text-[#6A7282]">Secure Payment</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span>
                  <FaClock className="text-[#16A34A]" />
                </span>
                <p className="font-medium text-[14px] leading-5 text-center align-middle text-[#6A7282]">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto my-6 bg-white p-6 rounded-xl shadow-md border h-fit ">
          <h1 className="text-2xl font-bold text-center">
            Create Your Account
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Start your fresh journey with us today
          </p>

          <div className="flex gap-4 mb-4 flex-col">
            <div className="flex-1 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <FaGoogle className="text-xl" />
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
            {/* EMAIL */}
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

            {/* PASSWORD */}
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

            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>I agree to the Terms of Service and Privacy Policy *</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-semibold cursor-pointer"
            >
              Sign in
            </Button>
            <div className="text-center flex justify-center ">
              <p>Already have an account? </p>
              <Link href="/login">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
