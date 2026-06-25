import { allorders } from "@/Servies/routemisr.servies";
import Image from "next/image";

export default async function Page() {
  const order = await allorders();

  console.log(order);

  return (
    <>
      <div className="p-4">
        {order?.data?.map((order: any) => (
          <div key={order._id} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-xl">
                Order Total:{" "}
                <span className="text-green-600">
                  {order.totalOrderPrice} EGP
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {order.cartItems.map((item: any) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      width={100}
                      height={100}
                      className="object-contain h-24 w-24"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2">
                      {item.product.title}
                    </h3>

                    <span className="text-xs text-green-600 block mb-2">
                      {item.product.category.name}
                    </span>

                    <p className="font-bold text-lg">{item.price} EGP</p>
                    <p className="text-sm text-gray-500">
                      Quantity:{" "}
                      <span className="font-semibold">{item.count}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
