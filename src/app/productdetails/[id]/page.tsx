import { getProduct } from "@/Servies/routemisr.servies";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import DetailsProduct from "../../_compoents/Detailsproduct/DetailsProduct";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const parms = await props.params;
  const id = parms.id;
  const Product = await getProduct(id);

  const rating = Product?.ratingsAverage || 0;
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return <FaStar key={i} className="text-yellow-400" />;
    else if (rating >= i + 0.5)
      return <FaStarHalfAlt key={i} className="text-yellow-400" />;
    else return <FaRegStar key={i} className="text-yellow-400" />;
  });

  if (!Product) {
    return <div>Product not found</div>;
  }

  return <DetailsProduct Product={Product} stars={stars} id={Product.id} />;
}
