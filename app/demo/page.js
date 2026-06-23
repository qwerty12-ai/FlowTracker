import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function DemoPage() {
  return (
    <div className="p-4 md:p-10">

      <Link href="/" className="text-sm text-zinc-400 hover:text-orange-400 flex items-center gap-1 mb-2 pt-6"> < MdKeyboardDoubleArrowLeft /> Back to Dashboard </Link>

      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        Demo Store
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border border-zinc-700 rounded-xl p-6 bg-zinc-900 hover:border-green-400 hover:-translate-y-1 transition-all">
          <h2 className="text-2xl font-bold">
            Nike Air Max
          </h2>
          <p className="text-zinc-400 mt-2">
            Premium running shoes.
          </p>
          <p className="text-xl font-bold mt-4">
            ₹4,999
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded">
              Add To Cart
            </button>
            <button className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-xl p-6 bg-zinc-900 hover:border-green-400 hover:-translate-y-1 transition-all">
          <h2 className="text-2xl font-bold">
            Wireless Headphones
          </h2>
          <p className="text-zinc-400 mt-2">
            Noise cancelling headphones.
          </p>
          <p className="text-xl font-bold mt-4">
            ₹2,499
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded">
              Add To Cart
            </button>
            <button className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}