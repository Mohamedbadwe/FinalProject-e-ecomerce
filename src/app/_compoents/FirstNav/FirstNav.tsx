"use client";
import Link from "next/link";
import React from "react";
import { CiGift } from "react-icons/ci";
import { FaCarSide, FaPhoneAlt, FaUserAlt, FaUserPlus } from "react-icons/fa";
import { BiMessageAltDots } from "react-icons/bi";
import { useSession } from "next-auth/react";

export default function FirstNav() {
  const { data, status } = useSession();

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:justify-between p-2 md:flex-row">
          <div className="flex gap-5 flex-col md:flex-row">
            <span className="flex items-center gap-1">
              <FaCarSide className="text-[#16A34A]" />
              Free Shipping on Orders 500 EGP
            </span>
            <span className="flex gap-1 items-center">
              <CiGift className="text-[#16A34A]" />
              New Arrivals Daily
            </span>
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <span className="flex items-center">
              <FaPhoneAlt />
              +1 (800) 123-4567
            </span>
            <span className="flex items-center font-['Font_1'] font-medium text-[14px] leading-5 tracking-[0] align-middle text-[#6A7282]">
              {" "}
              <BiMessageAltDots />
              support@freshcart.com
            </span>
            {status !== "authenticated" ? (
              <>
                <span className="flex items-center">
                  <FaUserAlt />
                  <Link href="/login">Sign in</Link>
                </span>{" "}
                <span className="flex items-center">
                  <FaUserPlus />
                  <Link href="/signup">Sign up</Link>
                </span>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
