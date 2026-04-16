"use client";
import {
  ClearAllcart,
  getCart,
  Removecart,
  Updatacart,
} from "@/action/cart.actions";
import { LucideLoaderCircle } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaLongArrowAltRight, FaTrash } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { FadeLoader } from "react-spinners";
import { toast } from "sonner";
import { cartData } from "./cart.type";
import { CartContext } from "@/Context/CartContext";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { IoCartSharp } from "react-icons/io5";
export default function CartPage() {
  const [productdata, setproductdata] = useState<null | cartData>(null);
  const [displayedupdata, setdisplayedupdata] = useState(false);
  const [displayedremove, setdisplayedremove] = useState(false);
  const [updataloading, setupdataloading] = useState(false);
  const [removeloading, setremoveloading] = useState(false);
  const [removeproduct, setremoveproduct] = useState(null);
  const [cartId, setcartId] = useState("");
  const [currentId, setcurrentId] = useState<null | string>(null);
  const { numberofcart, setnumberofcart } = useContext(CartContext);

  async function getUserCart() {
    const res = await getCart();
    if (res.status === "success") {
      setcartId(res.cartId);
      setproductdata(res.data);
    }
  }

  async function updatacart(id: string, newcount: number, sign: string) {
    setcurrentId(id);
    setdisplayedupdata(true);
    setupdataloading(true);

    const res = await Updatacart(id, newcount);
    console.log("updatacart", res);
    if (res.status === "success") {
      toast.success(res.message, {
        position: "top-center",
      });
      setproductdata(res.data);
      if (sign === "+") {
        setnumberofcart(numberofcart + 1);
      } else {
        setnumberofcart(numberofcart - 1);
      }
      setdisplayedupdata(false);
      setupdataloading(false);
    } else {
      toast.error(res.message, {
        position: "top-center",
      });
      setdisplayedupdata(false);
      setupdataloading(false);
    }
  }

  async function Removeproductcart(id: string, count: number) {
    setdisplayedremove(true);
    setremoveloading(true);
    const res = await Removecart(id);
    if ((res.status = "success")) {
      toast.success(res.message, {
        position: "top-center",
      });
      setnumberofcart(numberofcart - count);

      setremoveloading(false);
      setdisplayedremove(false);

      setremoveproduct(res.data);
      setproductdata(res.data);
    } else {
      toast.error(res.message, {
        position: "top-center",
      });
      setremoveloading(false);
      setdisplayedremove(false);
    }
  }

  async function ClearAll() {
    const res = await ClearAllcart();
    if (res.status === "success") {
      toast.success(res.message, {
        position: "top-center",
      });
      setproductdata(res.data);
      setnumberofcart(0);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  if (!productdata) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="green" />
      </div>
    );
  }

  return (
    <>
      {!productdata ? (
        <div className="h-screen flex justify-center items-center mx-auto text-center ">
          <div>
            <div className="size-25.25 bg-gray-400 flex justify-center items-center mx-auto rounded-full">
              <IoCartSharp className="size-15" />
            </div>
            <h4 className="text-4xl text-black py-3  ">Your cart is empty</h4>
            <p className="max-w-100">
              Looks like you haven't added anything to your cart yet. Start
              exploring our products!s.
            </p>
            <div className="flex flex-col mx-auto text-center mt-3">
              <button className="bg-green-500 rounded-2xl text-white text-2xl ">
                <Link
                  href={`/`}
                  className="flex items-center justify-center py-3 text-center mx-auto gap-2 "
                >
                  <p> Start Shoping</p>
                  <FaLongArrowAltRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-[90%]">
          <div>
            <p className="font-['Font_1'] font-bold text-[30px] leading-9 tracking-[0] align-middle">
              Shopping Cart
            </p>
            <span className="font-['Font_1'] font-medium text-[16px] leading-6 tracking-[0] align-middle">
              You have <span className="text-[#16A34A]">4 items</span> in your
              cart
            </span>
          </div>

          <div className=" p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start ">
            <div className="lg:col-span-2 flex flex-col gap-4">
              {productdata?.products.map((product) => (
                <div
                  key={product.product.id}
                  className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Image
                        src={product.product.imageCover}
                        alt={product.product.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <div>
                        <h2 className="text-lg font-semibold ">
                          {product.product.title}
                        </h2>
                        <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full w-fit">
                          {product.product.category.name
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")}
                        </span>
                        <p className="text-green-600 font-bold mt-2">
                          {product.price} EGP
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          disabled={displayedupdata}
                          onClick={() => {
                            updatacart(
                              product.product.id,
                              product.count - 1,
                              "-",
                            );
                          }}
                          className="w-10 h-10 bg-gray-200 rounded-lg cursor-pointer disabled:bg-black-400 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        {updataloading && product.product.id === currentId ? (
                          <FiLoader className="animate-spin" />
                        ) : (
                          <div>
                            <span className="font-semibold">
                              {product.count}
                            </span>
                          </div>
                        )}

                        <button
                          disabled={displayedupdata}
                          onClick={
                            () =>
                              updatacart(
                                product.product.id,
                                product.count + 1,
                                "+",
                              )
                          }
                          className="w-10 h-10 bg-green-500 text-white rounded-lg cursor-pointer disabled:bg-black-400 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-end flex-col gap-4">
                    <div className="flex items-center">
                      <div className="text-right">
                        <p className="font-bold">
                          {product.price * product.count} EGP
                        </p>
                      </div>
                      {removeloading && product.product.id === currentId ? (
                        <LucideLoaderCircle className="animate-spin" />
                      ) : (
                        <button
                          disabled={displayedremove}
                          onClick={() => {
                            Removeproductcart(
                              product.product.id,
                              product.count,
                            );
                          }}
                          className="cursor-pointer disabled:cursor-not-allowed  w-10 h-10 bg-red-100 text-red-500 rounded-lg flex items-center justify-center"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <Link href={`/checkout/${cartId}`}>
                  <button className="cursor-pointer  p-3 rounded-3xl flex items-center gap-2">
                    <IoIosArrowRoundBack className="text-[#16A34A] font-medium text-[14px] leading-5" />

                    <span className="text-[#16A34A]">Continue Shopping</span>
                  </button>
                </Link>

                <button
                  onClick={() => {
                    ClearAll();
                  }}
                  className="cursor-pointer flex items-center gap-2"
                >
                  <FaTrash className="text-[#99A1AF]" />
                  <p className="text-[#99A1AF]"> Clear all items</p>
                </button>
              </div>
            </div>

            <div className="lg:col-span-1 w-full max-w-md">
              <div className="  bg-white rounded-2xl shadow-md overflow-hidden sticky top-4">
                <div className="bg-green-600 text-white p-4">
                  <h2 className="font-semibold text-lg">Order Summary</h2>
                  <p className="text-sm">
                    4 items in your <span className="font-bold">cart</span>
                  </p>
                </div>

                <div className="p-4 space-y-4">
                  <div className="bg-gray-100 rounded-xl p-3 flex items-start gap-3">
                    <span className="text-green-600 text-xl">🚚</span>
                    <div>
                      <p className="font-semibold text-sm">Free Shipping!</p>
                      <p className="text-xs text-gray-500">
                        You qualify for free delivery
                      </p>
                    </div>
                  </div>

                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subtotal</span>
                      <span> {productdata?.totalCartPrice}EGP</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping</span>
                      <span className="text-green-600 font-semibold">FREE</span>
                    </div>

                    <div className="border-t pt-2 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span> {productdata?.totalCartPrice}EGP</span>
                    </div>
                  </div>

                  <button className="w-full border rounded-xl py-2 text-sm cursor-pointer">
                    🏷️ Apply Promo Code
                  </button>
                  <Link href={`/checkout/${cartId}`}>
                    <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold cursor-pointer">
                      🔒 Secure Checkout
                    </button>
                  </Link>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>💳 Secure Payment</span>
                    <span>🚚 Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
