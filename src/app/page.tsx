import Image from "next/image";
import FeaturedProducts from "./_compoents/FeaturedProducts/FeaturedProducts";
import Myslider from "./_compoents/Myslider/Myslider";
import img1 from "../assets/images/home-slider-1.d79601a8.png";
import img2 from "../assets/images/images.jpg";
import img3 from "../assets/images/pngtree-fruits-illutration-ai-and-png-png-image_1770220.jpg";
import { lazy, Suspense } from "react";
import Loading from "./loading";
import Cardslider from "./_compoents/Cardsslider/Cardslider";
import CardsSales from "./_compoents/CardsSales/CardsSales";
import Deleveries from "./_compoents/Delveries/Deleveries";

const LazyHomeCategoryCompents = lazy(
  () => import("./_compoents/HomeCategory/HomeCategory"),
);

export default function Home() {
  return (
    <>
      <Myslider height="h-[400px]" listOfImg={[img1.src, img2.src, img3.src]} />
      <Cardslider />

      <Suspense fallback={<Loading />}>
        <LazyHomeCategoryCompents />
      </Suspense>
      <CardsSales />
      <FeaturedProducts />
      <Deleveries /> 
    </>
  );
}
