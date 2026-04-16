import { Singlecategory } from "@/Servies/routemisr.servies";
import { SingleType, SubCategory } from "@/app/types/route.misr";
import React from "react";
import { IoNotificationsOffCircleOutline } from "react-icons/io5";

export default async function page(props: { params: { id: string } }) {
  const params = await props.params;
  const id = params.id;

  const Categoty = await Singlecategory(id);
  console.log(Categoty);

  return (
    <>
    
      <div className="flex justify-center p-3 flex-col cursor-pointer bg-[#16A34A] h-51">
        <div className="flex gap-2 ">
          <div className="bg-white p-3">
            <img
              src={Categoty?.image}
              alt={Categoty?.name}
              className="size-16 object-cover"
            />
          </div>
          <div>
            <h2 className=" font-semibold text-[18px] mt-3 text-gray-700">
              {Categoty?.name}
            </h2>
            <p>Choose a subcategory to browse products</p>
          </div>
        </div>
      </div>
    </>
  );
}
