// /app/(components)/NewArrivals.jsx
'use client';

import ProductCard from './ProductCard';
import appData from '@/lib/data';

export default function NewArrivals() {
  // Get first 4 products as "new arrivals" (you can customize this logic)
  const newArrivals = appData.products.slice(0, 8);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            New <span className="text-red-500">Arrivals</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Discover the best deals on top-quality products. Crafted to elevate
            your everyday experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}