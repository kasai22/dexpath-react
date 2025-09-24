import Image from "next/image";

export default function ProductFeatures() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-12">
          <span className="text-gray-400">Product</span> Features
        </h2>

        <div className="relative inline-block">
          {/* Product Image */}
          <Image
            src="/product.png" // place your uploaded image in public/ as product.png
            alt="DEXPATH Product"
            width={800}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
