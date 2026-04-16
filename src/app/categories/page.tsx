import { getAllCategory } from "@/Servies/routemisr.servies";
import Image from "next/image";
import Link from "next/link";
import { TbBrandAppleFilled } from "react-icons/tb";

export default async function page() {
  const Category = await getAllCategory();

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

      <div className="w-[90%] mx-auto py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Category?.map((card) => (
            <Link href={`/SubCategories`} key={card._id}>
              <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover w-20 h-20"
                  />

                  <h2 className="font-medium text-[16px] text-center text-[#364153]">
                    {card.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
