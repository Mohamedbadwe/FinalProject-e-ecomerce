"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CartContext } from "@/Context/CartContext";

const categories = [
  { title: "All Categories", href: "/categories" },
  { title: "Electronics", href: "/categories/electronics" },
  { title: "Women's Fashion", href: "/categories/women's-fashion" },
  { title: "Men's Fashion", href: "/categories/men's-fashion" },
  { title: "Beauty & Health", href: "/categories/beauty-and-health" },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const { numberofcart } = useContext(CartContext);

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-1">
            <h1 className="text-[#21313C] text-3xl font-bold whitespace-nowrap">
              <Link href="/">Fresh Cart</Link>
            </h1>

            <div className="hidden md:block flex-1 max-w-xl relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full border-2 border-gray-200 rounded-3xl py-3 px-5 pr-14 focus:border-[#16A34A] outline-none transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#16A34A] text-white p-2 rounded-3xl hover:bg-[#15803d] transition-colors">
                <CiSearch className="text-3xl" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-[#364153] hover:text-[#16A34A] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="font-medium text-[#364153] hover:text-[#16A34A] transition-colors"
            >
              Shop
            </Link>

            <div className="relative group">
              <button className="font-medium text-[#364153] hover:text-[#16A34A] transition-colors flex items-center gap-1">
                Categories
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute hidden group-hover:block pt-3">
                <div className="bg-white shadow-xl rounded-2xl py-4 px-6 w-56 border">
                  {categories.map((cat) => (
                    <Link
                      key={cat.title}
                      href={cat.href}
                      className="block py-2.5 text-sm hover:text-[#16A34A] transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/brands"
              className="font-medium text-[#364153] hover:text-[#16A34A] transition-colors"
            >
              Brands
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/chatbot" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#F0FDF4] rounded-full flex items-center justify-center">
                <RiCustomerService2Fill className="text-[#16A34A] text-2xl" />
              </div>
              <div className="text-xs leading-tight">
                <p className="font-medium text-[#364153]">Support</p>
                <p className="text-[#16A34A]">24/7 Help</p>
              </div>
            </Link>

            <Link
              href="/wishlist"
              className="text-3xl text-[#364153] hover:text-[#16A34A] transition-colors"
            >
              <CiHeart />
            </Link>

            <Link
              href="/cart"
              className="relative text-3xl text-[#364153] hover:text-[#16A34A] transition-colors"
            >
              <FaShoppingCart />
              {numberofcart > 0 && (
                <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center">
                  {numberofcart}
                </div>
              )}
            </Link>

            {status !== "authenticated" ? (
              <Link
                href="/login"
                className="flex items-center gap-2 bg-[#16A34A] text-white px-6 py-2.5 rounded-full hover:bg-[#15803d] transition-colors"
              >
                <FaUser />
                <span className="font-medium">Sign in</span>
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 bg-[#16A34A] text-white px-6 py-2.5 rounded-full hover:bg-[#15803d] transition-colors"
              >
                <FaUser />
                <span className="font-medium">Log out</span>
              </button>
            )}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <span className="bg-[#16A34A] text-white p-3 rounded-full flex items-center justify-center cursor-pointer">
                  <IoMenu size={26} />
                </span>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 p-6">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-left">
                    Fresh Cart
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-10 flex flex-col gap-6 text-lg">
                  <Link
                    href="/"
                    className="hover:text-[#16A34A] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="hover:text-[#16A34A] transition-colors"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/categories"
                    className="hover:text-[#16A34A] transition-colors"
                  >
                    Categories
                  </Link>
                  <Link
                    href="/brands"
                    className="hover:text-[#16A34A] transition-colors"
                  >
                    Brands
                  </Link>

                  <hr className="my-4 border-gray-200" />

                  <Link
                    href="/wishlist"
                    className="hover:text-[#16A34A] transition-colors"
                  >
                    Wishlist
                  </Link>
                  <Link
                    href="/cart"
                    className="hover:text-[#16A34A] transition-colors flex justify-between items-center"
                  >
                    Cart
                    {numberofcart > 0 && (
                      <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                        {numberofcart}
                      </span>
                    )}
                  </Link>

                  <div className="pt-6">
                    {status !== "authenticated" ? (
                      <Link
                        href="/login"
                        className="block w-full text-center bg-[#16A34A] text-white py-3.5 rounded-2xl font-medium"
                      >
                        Sign in
                      </Link>
                    ) : (
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-center bg-red-500 text-white py-3.5 rounded-2xl font-medium"
                      >
                        Log out
                      </button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
