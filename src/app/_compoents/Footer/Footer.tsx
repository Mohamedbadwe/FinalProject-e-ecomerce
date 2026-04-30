"use client";

import Link from "next/link";

import {
  CiCreditCard1,
  CiFacebook,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import { FaInstagram, FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-[#101828] pt-12  ">
      <div className=" mx-auto w-[90%] grid  md:grid-cols-2 lg:grid-cols-5  ">
        <div className="flex flex-col gap-4   ">
          <div className="flex items-center gap-3 bg-white w-fit py-2 px-4">
            <span>
              <FaShoppingCart />
            </span>
            <h1>FreshCart</h1>
          </div>
          <div>
            <p className="max-w-150.25 font-['Font_1'] font-medium text-[14px] leading-[22.75px] tracking-[0] align-middle text-[#99A1AF]">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span>
                <IoMenu />
              </span>
              <p className="font-['Font_1'] font-medium text-[14px] text-[#99A1AF] leading-5 tracking-[0] align-middle">
                +1 (800) 123-4567
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <IoMenu />
              </span>
              <p className="font-['Font_1'] font-medium text-[14px] text-[#99A1AF] leading-5 tracking-[0] align-middle">
                +1 (800) 123-4567
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <IoMenu />
              </span>
              <p className="font-['Font_1'] font-medium text-[14px] text-[#99A1AF] leading-5 tracking-[0] align-middle">
                +1 (800) 123-4567
              </p>
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="size-10 rounded-full bg-[#1E2939] flex justify-center items-center">
              <CiFacebook className="w-5" />
            </div>
            <div className="size-10 rounded-full bg-[#1E2939] flex justify-center items-center">
              <CiTwitter className="w-5" />
            </div>
            <div className="size-10 rounded-full bg-[#1E2939] flex justify-center items-center">
              <FaInstagram className="w-5" />
            </div>
            <div className="size-10 rounded-full bg-[#1E2939] flex justify-center items-center">
              <CiYoutube className="w-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div>
            <h1 className="font-medium text-[14px] leading-5 align-middle text-white">Shop</h1>
          </div>

          <div className="flex flex-col font-['Font_1'] gap-4 font-medium text-[14px] leading-5 tracking-[0] align-middle text-[#99A1AF]">
            <div>
              <Link href={`/shop`}>All Products</Link>
            </div>
            <div>
              <Link href={`/shop`}>Categories</Link>
            </div>
            <div>
              <Link href={`/shop`}>Brands</Link>
            </div>
            <div>
              <Link href={`/shop`}>Electronics</Link>
            </div>
            <div>
              <Link href={`/shop`}>Men's Fashion</Link>
            </div>
            <div>
              <Link href={`/shop`}>Women's Fashion</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <div>
            <h1 className="font-semibold text-[18px] leading-7 text-white">Account</h1>
          </div>

          <div className="flex flex-col font-['Font_1'] gap-4 font-medium text-[14px] leading-5 tracking-[0] align-middle text-[#99A1AF]">
            <div>
              <Link href={`/shop`}className="font-medium text-[14px] leading-[20px] text-[#99A1AF]" >My Account</Link>
            </div>
            <div>
              <Link href={`/shop`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Order History</Link>
            </div>
            <div>
              <Link href={`/brands`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Brands</Link>
            </div>
            <div>
              <Link href={`/Wishlist`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Wishlist</Link>
            </div>
            <div>
              <Link href={`/login`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Sign In</Link>
            </div>
            <div>
              <Link href={`/signup`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Create Account</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <div>
            <h1 className="font-semibold text-[18px] leading-7 text-white">Support</h1>
          </div>

          <div className="flex flex-col font-['Font_1'] gap-4 font-medium text-[14px] leading-5 tracking-[0] align-middle text-[#99A1AF]">
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">All Products</Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Contact Us</Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Help Center </Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Shipping Info</Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Returns & Refunds</Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Track Order</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 ">
          <div>
            <h1 className="font-medium text-[14px] leading-5 align-middle text-white">Legal</h1>
          </div>

          <div className="flex flex-col font-['Font_1'] gap-4 font-medium text-[14px] leading-5 tracking-[0] align-middle text-[#99A1AF]">
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Privacy Policy</Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Terms of Service</Link>
            </div>
            <div>
              <Link href={`/`} className="font-medium text-[14px] leading-5 text-[#99A1AF]">Cookie Policy</Link>
            </div>
       
          </div>
        </div>
      </div>
      <div className="py-5  ">
        <hr className="bg-[#1E2939]" />
      </div>
      <div className="w-[90%] mx-auto flex justify-between">
        <div>
          <p className="font-['Font_1'] font-medium text-[14px] text-[#6A7282] leading-5 tracking-[0] align-middle">
            © 2026 FreshCart. All rights reserved.
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <CiCreditCard1 />
            <p className="font-['Font_1'] font-medium text-[14px] leading-5 tracking-[0] align-middle">
              Visa
            </p>
          </div>
          <div>
            <CiCreditCard1 />
            <p className="font-['Font_1'] font-medium text-[14px] leading-[20px] tracking-[0] align-middle">
              Visa
            </p>
          </div>
          <div>
            <CiCreditCard1 />
            <p className="font-['Font_1'] font-medium text-[14px] leading-[20px] tracking-[0] align-middle">
              Visa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
