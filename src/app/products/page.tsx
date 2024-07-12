import Hero from "@/components/Hero";
import ProductsImg from "public/performance.jpg";

export default function products() {
  return (
    <>
      <div>
        <Hero
          imageSrc={ProductsImg}
          title={"Products Page"}
          imageAlt={"This is the Products Page"}
        />
      </div>
    </>
  );
}
