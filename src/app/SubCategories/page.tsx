import { SubCategories, SubCategoriesdetails } from "@/Servies/routemisr.servies";
import Link from "next/link";
import React from "react";
import { TbBrandAppleFilled } from "react-icons/tb";
import { SubCategory } from "../types/route.misr";

export default async function page(props: { params: { id: string } }) {
const params = await props.params;
  const id = params.id;

  const SubCategoriesdetail = await SubCategoriesdetails(id)

  console.log(SubCategoriesdetail);
  const subCategories = await SubCategories();

  return (
    <>
    <div className="bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_50%,#4ADE80_100%)] h-60 flex items-center">
            <div className="w-[90%] mx-auto">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                  <TbBrandAppleFilled size={36} />
                </div>
    
                <div>
                  <h1 className="font-bold text-[36px] leading-10 tracking-[-0.9px]">
                    All Categories{" "}
                  </h1>
                  <p className="font-medium text-[16px] leading-6 mt-2 opacity-90">
                    Browse our wide range of product categories{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
    <div className="grid lg:grid-cols-4 gap-4 w-[90%] mx-auto mt-4">
      {subCategories?.map((item : SubCategory) => (
        <Link href={`/subCategoriesdetails/${item._id}`} key={item._id}>
          <div className=" bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
            {/* icon */}
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-7 h-7 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 7h5l2 3h11v10a2 2 0 0 1-2 2H3z" />
              </svg>
            </div>

            <h2 className="text-gray-800 font-semibold text-lg">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
        </>

  );
}
