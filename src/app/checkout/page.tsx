import Hero from "@/components/Hero";
import CheckoutImg from "public/reliability.jpg";

export default function checkout() {
  return (
    <>
      <div>
        <Hero
          imageSrc={CheckoutImg}
          title={"Checkout Page"}
          imageAlt={"This is the Checkout Page"}
        />
      </div>
    </>
  );
}
