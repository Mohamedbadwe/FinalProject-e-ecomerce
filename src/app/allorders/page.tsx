import { allorders } from "@/Servies/routemisr.servies";
import Image from "next/image";

export default async function Page(props: { params: { id: string } }) {

 const params = await props.params;
  const id = params.id;

  const orders = await allorders(id);
  // console.log(orders);
  

  return (
    <div className="p-4">
      {orders?.data?.map((order: any) => (
        <div key={order._id} className="mb-6">
          <h2 className="font-bold mb-2">
            Order Total: {order.totalOrderPrice} EGP
          </h2>

          {order.cartItems.map((item: any) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 mb-2"
            >
              <Image
                src={item.product.imageCover}
                alt={item.product.title}
                width={80}
                height={80}
                className="object-contain"
              />

              <div>
                <h3 className="font-semibold">
                  {item.product.title}
                </h3>

                <span className="text-sm text-green-600">
                  {item.product.category.name}
                </span>

                <p className="font-bold">
                  {item.price} EGP × {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}