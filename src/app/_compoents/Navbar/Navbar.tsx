"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { RiCustomerService2Fill } from "react-icons/ri";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartContext } from "@/Context/CartContext";
import { NumberFieldScrubArea } from "@base-ui/react";

const components: { title: string; href: string }[] = [
  {
    title: "All Categores",
    href: "/categories",
  },
  {
    title: "electronc",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Womens Fashion",
    href: "/docs/primitives/progress",
  },
  {
    title: "Mens fashion",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Beauty & health",
    href: "/docs/primitives/tabs",
  },
];

export default function Navbar() {
  const { data, status } = useSession();

  const { numberofcart, setnumberofcart } = useContext(CartContext);
  console.log(numberofcart);

  function MysignOut() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

  return (
    <NavigationMenu className="max-w-full  bg-white h-18 sticky top-0 z-50 w-[90%] mx-auto ">
      <NavigationMenuList className="flex justify-between gap-5  ">
        <div className="flex gap-2 items-center grow">
          <h6 className="text-[#21313C] text-3xl font-bold whitespace-nowrap ">
            <Link href="/">Fresh Cart</Link>
          </h6>

          <div className="w-[70%]">
            <div className="md:flex hidden rounded-4xl relative w-full">
              <CiSearch className="absolute top-2 right-2 bg-[#16A34A] text-white p-2 text-4xl rounded-4xl font-bold " />
              <input
                type="text"
                className="hidden md:block border-2 rounded-2xl py-3 px-2 hover:border-[#16A34A] w-full"
                placeholder="Search for products, brands and more..."
              />
            </div>
          </div>
        </div>

        <div className=" hidden md:flex gap-4">
          <NavigationMenuList className="max-w-fit gap-10">
            <NavigationMenuItem className="text-[#364153]">
              <Link
                href="/"
                className="hover:text-[#16A34A] text-[#364153] transition-all font-[Font_1] font-medium text-[16px] leading-6 tracking-[0] align-middle"
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/shop"
                className="hover:text-[#16A34A]  transition-all font-[Font_1] font-medium text-[16px] leading-6 tracking-[0] align-middle"
              >
                Shop
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2  md:grid-cols-1 ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/brands"
                className="hover:text-[#16A34A]  transition-all font-[Font_1] font-medium text-[16px] leading-6 tracking-[0] align-middle"
              >
                Brands
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="hidden md:flex max-w-fit gap-6">
            <NavigationMenuItem className="text-[#364153] ">
              <Link href="/wishlist" className="text-3xl">
                <div className="flex items-center ">
                  <div className="size-10 flex justify-center items-center bg-[#F0FDF4] rounded-full gap-4">
                    <RiCustomerService2Fill className="text-[20px] text-[#16A34A]" />
                  </div>
                  <div className="m-0">
                    <p className="font-['Font_1'] font-medium text-[12px] leading-4 tracking-[0] align-middle">
                      Support
                    </p>
                    <span className="font-['Font_1'] font-semibold text-[12px] leading-4 tracking-[0] align-middle">
                      24/7 Help
                    </span>
                  </div>
                </div>
              </Link>
            </NavigationMenuItem>
            <div className="flex">
              <NavigationMenuItem className="text-[#364153]">
                <Link href="/wishlist" className="text-2xl md:text-3xl">
                  <CiHeart />
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="text-[#364153] relative">
                <Link href="/cart" className="text-2xl md:text-3xl">
                  <FaShoppingCart />

                  {numberofcart !== 0 && (
                    <div className="bg-green-600 size-5 md:size-6 absolute -top-2 -inset-e-2 md:-top-3 md:-inset-e-3 rounded-full text-xs md:text-sm text-white flex justify-center items-center">
                      {numberofcart}
                    </div>
                  )}
                </Link>
              </NavigationMenuItem>
            </div>
            {status !== "authenticated" ? (
              <NavigationMenuItem>
                <Link
                  href={`/login`}
                  className="py-2.5 text-white px-3 flex items-center gap-1 bg-green-500 cursor-pointer rounded-full"
                >
                  <FaUser />
                  <span>Signin</span>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <button
                  onClick={MysignOut}
                  className="py-2.5 text-white px-1 flex items-center gap-1 bg-green-500 cursor-pointer rounded-full"
                >
                  <FaUser />
                  <span>Log out</span>
                </button>
              </NavigationMenuItem>
            )}

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="bg-green-500 text-white p-2 rounded-full flex">
                  <IoMenu size={22} />
                </SheetTrigger>

                <SheetContent side="right" className="w-65 p-5">
                  <SheetHeader>
                    <SheetTitle>Fresh Cart</SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-4 mt-6">
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/brands">Brands</Link>

                    <hr />

                    <Link href="/wishlist">Wishlist</Link>
                    <Link href="/cart">Cart</Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuList>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <Link href={href}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </Link>
    </li>
  );
}
