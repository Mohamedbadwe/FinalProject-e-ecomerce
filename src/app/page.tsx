import Image from "next/image";
import FeaturedProducts from "./_compoents/FeaturedProducts/FeaturedProducts";
import Myslider from "./_compoents/Myslider/Myslider";
import img1 from "../assets/images/ChatGPT Image 19 يونيو 2026، 10_02_17 م.png";
import img2 from "../assets/images/photo 2 .png";
import img3 from "../assets/images/photo 3.png";
import { lazy, Suspense } from "react";
import Loading from "./loading";
import Cardslider from "./_compoents/Cardsslider/Cardslider";
import CardsSales from "./_compoents/CardsSales/CardsSales";
import Deleveries from "./_compoents/Delveries/Deleveries";

const LazyHomeCategoryCompents = lazy(
  () => import("./_compoents/HomeCategory/HomeCategory"),
);

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Myslider height="h-[250px]" listOfImg={[img1.src, img2.src, img3.src]} />
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
