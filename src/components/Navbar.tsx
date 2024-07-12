import Link from "next/link";
/*
Edit ts config file to get the image
    "paths": {
      "@/*": ["./src/*"],
      "public/*": ["./public/*"]
    }
 */
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className="flex items-center justify-between bg-gray-500 p-8 w-full absolute text-white z-10"
      style={{ opacity: 0.5 }}
    >
      <div>
        <Link href="/">
          <Image
            src="/mainLogo.png" // Path to the image in the public folder
            alt="Ecommerce Company Logo"
            width={100}
            height={100}
            style={{ transform: "rotate(-20deg)" }}
          />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/cart" className="text-white bold font-mono">
          Cart
        </Link>
        <Link href="/products" className="text-white bold font-mono">
          Products
        </Link>
        <Link href="/checkout" className="text-white bold font-mono">
          Checkout
        </Link>
      </div>
    </div>
  );
}
