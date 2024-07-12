import Hero from "@/components/Hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <>
      <div>
        <Hero
          imageSrc={homeImg}
          title={"Home Page"}
          imageAlt={"This is the Home Page"}
        />
      </div>
    </>
  );
}
