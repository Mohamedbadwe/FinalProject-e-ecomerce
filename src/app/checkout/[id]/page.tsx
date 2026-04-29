"use client";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { checkoutSchem, checkoutType } from "@/Schema/checkout.schem";
import { onlinePayment } from "../../../action/checkout.action";
import {
  Building2,
  CheckCircle2,
  CreditCard,
  Info,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { getCart } from "@/action/cart.actions";
import { cartProduct } from "@/app/cart/cart.type";

export default function page() {
  const [cart, setCart] = useState<any>(null);
  const { id }: { id: string } = useParams();

  const form = useForm<checkoutType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(checkoutSchem),
  });

  const { register, handleSubmit, control } = form;

  async function Mysubmit(data: checkoutType) {
    console.log(data);

    const res = await onlinePayment(id, "", data);
    console.log(res);
    if (res.status === "success") {
      window.location.href = res.session.url;
    }
  }
  useEffect(() => {
    async function fetchOrders() {
      const res = await getCart();
      setCart(res.data);
      console.log(res.data);
    }

    fetchOrders();
  }, []);
  return (
    <>
      <div className=" w-[90%] mx-auto grid lg:grid-cols-[1.2fr_0.6fr] gap-4  ">
        <div className="flex flex-col gap-3">
          <div className=" p-4 bg-white shadow-sm border border-gray-100 rounded-lg">
            <div className="bg-[#28a745] text-white p-4 rounded-t-lg -mx-4 -mt-4 mb-6 flex items-center gap-2">
              <div className="bg-white/20 p-1 rounded-md">
                <MapPin size={20} />
              </div>
              <div>
                <h2 className="font-bold text-lg">Shipping Address</h2>
                <p className="text-xs opacity-90">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 text-gray-700">
                <span className="text-green-600">🔖</span>
                <h3 className="font-semibold text-sm">Saved Addresses</h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Select a saved address or enter a new one below
              </p>

              <div className="border-2 border-gray-100 rounded-xl p-4 mb-3 flex items-start gap-4 hover:border-green-100 cursor-pointer transition-all">
                <div className="bg-gray-100 p-2 rounded-lg text-gray-400">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">
                    Sadat City
                  </h4>
                  <p className="text-xs text-gray-500">Sadat City</p>
                  <div className="flex gap-4 mt-2 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Phone size={12} /> 01097514862
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 size={12} /> Sadat City
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-green-400 bg-green-50/30 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-green-50 transition-all">
                <div className="bg-green-500 text-white p-2 rounded-lg">
                  <Plus size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-green-700 text-sm">
                    Use a different address
                  </h4>
                  <p className="text-[11px] text-green-600/70">
                    Enter a new shipping address manually
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 p-3 rounded-lg flex items-start gap-3 mb-6">
              <Info size={18} className="text-blue-500 mt-0.5" />
              <div>
                <h5 className="text-blue-700 font-bold text-xs">
                  Delivery Information
                </h5>
                <p className="text-[11px] text-blue-600/80">
                  Please ensure your address is accurate for smooth delivery
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(Mysubmit)}
              className="flex flex-col gap-4"
            >
              <Controller
                name="details"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="details">Details*</FieldLabel>

                    <Input
                      id="details"
                      type="text"
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
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">Phone*</FieldLabel>

                    <Input
                      id="phone"
                      type="tel"
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
                name="city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="city">City*</FieldLabel>

                    <Input
                      id="city"
                      type="text"
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

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-lg font-semibold cursor-pointer"
              >
                Checkout
              </Button>
            </form>
          </div>
          <div className=" p-4 bg-white shadow-sm border border-gray-100 rounded-lg">
            <div className="bg-[#1a9138] text-white p-4 rounded-t-lg -mx-4 -mt-4 mb-6 flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-md">
                <Wallet size={20} />
              </div>
              <div>
                <h2 className="font-bold text-lg leading-none">
                  Payment Method
                </h2>
                <p className="text-[11px] opacity-90 mt-1">
                  Choose how you'd like to pay
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="">
                  <Wallet size={24} />
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">
                    Cash on Delivery
                  </h4>
                  <p className="text-xs text-gray-500">
                    Pay when your order arrives at your doorstep
                  </p>
                </div>

                <div className="flex items-center"></div>
              </div>

              <div>
                <div className="">
                  <CreditCard size={24} />
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">
                    Pay Online
                  </h4>
                  <p className="text-xs text-gray-500">
                    Secure payment with Credit/Debit Card via Stripe
                  </p>
                  <div className="flex gap-1.5 mt-2">
                    <div className="w-7 h-4 bg-[#1a3a82] rounded-sm flex items-center justify-center text-[8px] text-white font-bold italic">
                      VISA
                    </div>
                    <div className="w-7 h-4 bg-[#eb001b] rounded-sm flex items-center justify-center text-[8px] text-white font-bold italic">
                      MC
                    </div>
                  </div>
                </div>

                <div className="flex items-center"></div>
              </div>
            </div>

            <div className="mt-6 bg-[#f4faf6] border border-green-50 p-3 rounded-xl flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h5 className="text-green-800 font-bold text-[11px]">
                  Secure & Encrypted
                </h5>
                <p className="text-[10px] text-green-700/70">
                  Your payment info is protected with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 w-full max-w-md">
          <div className="  bg-white rounded-2xl shadow-md overflow-hidden  ">
            <div className="bg-green-600 text-white p-4">
              <h2 className="font-semibold text-lg">Order Summary</h2>
              <p className="text-sm">
                4 items in your <span className="font-bold">cart</span>
              </p>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex flex-col gap-2">
                {cart?.products.map((product : cartProduct) => (
                  <div key={product.product.id}>
                    <div className="bg-white rounded-[8px] border p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="size-14 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Image
                            src={product.product.imageCover}
                            alt={product.product.title}
                            width={56}
                            height={56}
                            className="object-contain"
                          />
                        </div>

                        <div>
                          <h2 className="text-lg font-semibold">
                            {product.product.title}
                          </h2>
                          <p>
                            {product.count} * {product.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">
                            {product.price * product.count}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between w-[90%] mx-auto">
                <p className="font-['Font_1'] font-medium text-[16px] leading-6 tracking-[0] text-[#4A5565]">
                  Subtotal
                </p>
                <span className="font-['Font_1'] font-medium text-[16px] leading-6 tracking-[0]">
                  {cart?.totalCartPrice} EGP
                </span>
              </div>
              <div className="flex justify-between w-[90%] mx-auto">
                <p className="font-['Font_1'] font-medium text-base leading-6 tracking-normal">
                  Shipping
                </p>
                <span className="font-['Font_1'] font-semibold text-base leading-6 tracking-normal text-[#00A63E]">
                  FREE
                </span>
              </div>
            </div>
            <div className="py-4">
              <hr />
            </div>
            <div className="flex justify-between w-[90%] mx-auto">
              <p className="font-['Font_1'] font-medium text-[16px] leading-6 tracking-[0] text-[#4A5565]">
                total
              </p>
              <span className="font-['Font_1'] font-medium text-[16px] leading-6 tracking-[0]">
                {cart?.totalCartPrice} EGP
              </span>
            </div>

            <div className="py-4 flex justify-center">
              <button type="submit" className="w-[90%] mx-auto cursor-pointer bg-linear-to-r from-[#16A34A] to-[#15803D] text-white py-3 rounded-xl font-semibold">
                🔒 Place Order
              </button>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>💳 Secure Payment</span>
              <span>🚚 Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
