"use client";

import { FaApple, FaGooglePlay, FaEnvelope } from "react-icons/fa";

export default function NewsletterSection() {
  return (
    <section className="w-full py-16 bg-[#F9FAFB]">
      <div className="mx-auto w-[90%] flex flex-col lg:flex-row items-stretch gap-10">
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs text-emerald-600 font-semibold">
                NEWSLETTER
              </p>
              <span className="text-xs text-gray-500">50,000+ subscribers</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Get the Freshest Updates{" "}
            <span className="text-emerald-600">Delivered Free</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Weekly recipes, seasonal offers & exclusive member perks.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Fresh Picks Weekly",
              "Free Delivery Codes",
              "Members-Only Deals",
            ].map((item, i) => (
              <span
                key={i}
                className="text-sm px-4 py-2 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
              Subscribe →
            </button>
          </div>

          <p className="text-xs text-gray-400">
            ✨ Unsubscribe anytime. No spam, ever.
          </p>
        </div>

        <div className="flex-1">
          <div className="h-full rounded-2xl p-8 text-white bg-linear-to-br from-[#0F172A] to-[#064E3B] flex flex-col justify-between">
            <div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full">
                MOBILE APP
              </span>

              <h2 className="text-2xl font-bold mt-4">
                Shop Faster on Our App
              </h2>

              <p className="text-sm text-gray-300 mt-2">
                Get app-exclusive deals & 15% off your first order.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <button className="flex items-center ps-4  gap-2 bg-white/10 hover:bg-white/20 transition py-3 rounded-xl">
                <div>
                  <FaApple className="size-6.25" />
                </div>
                <div className="flex items-center flex-col">
                <p className="font-['Font_1'] font-medium text-[10px] leading-3.75 tracking-[0.25px] uppercase align-middle text-[#99A1AF]">Download on</p>
                <p className="font-['Font_1'] font-semibold text-[14px] leading-5 tracking-[0] align-middle"> App Store</p>
                </div>
              </button>

              <button className="flex items-center ps-4  gap-2 bg-white/10 hover:bg-white/20 transition py-3 rounded-xl">
                <div>
                  <FaGooglePlay className="size-6.25" />
                </div>
                <div className="flex items-center flex-col">
                <p className="font-['Font_1'] font-medium text-[10px] leading-3.75 tracking-[0.25px] uppercase align-middle text-[#99A1AF]">Get it on</p>
                <p className="font-['Font_1'] font-semibold text-[14px] leading-5 tracking-[0] align-middle"> Google Play</p>
                </div>
              </button>
            </div>

            {/* Rating */}
            <div className="mt-6 text-sm text-gray-300">
              ⭐⭐⭐⭐⭐ <span className="ml-2">4.9 • 100K+ downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
