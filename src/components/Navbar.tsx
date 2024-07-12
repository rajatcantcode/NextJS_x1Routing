import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-green-500 p-8">
      <div>
        <Link href="/">
          <div className="text-white font-mono">Ecommerce Company</div>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/cart" className="text-white">
          Cart
        </Link>
        <Link href="/products" className="text-white">
          Products
        </Link>
        <Link href="/checkout" className="text-white">
          Checkout
        </Link>
      </div>
    </div>
  );
}
