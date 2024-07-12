import { StaticImageData } from "next/image";
import Image from "next/image";

interface heroProps {
  imageSrc: StaticImageData;
  title: string;
  imageAlt: string;
}

export default function Hero(props: heroProps) {
  return (
    <>
      <div className="h-screen w-full relative">
        <div className="absolute -z-10 inset-0">
          <Image
            src={props.imageSrc} // Path to the image in the public folder
            alt={props.imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-9xl text-zinc-300">{props.title}</div>
        </div>
      </div>
    </>
  );
}
