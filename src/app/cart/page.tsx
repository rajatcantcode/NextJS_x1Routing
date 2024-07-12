import Hero from "@/components/Hero";
import cartImg from "public/scale.jpg";

export default function cart() {
  return (
    <>
      <div>
        <Hero
          imageSrc={cartImg}
          title={"cart Page"}
          imageAlt={"This is the cart Page"}
        />
      </div>
    </>
  );
}
