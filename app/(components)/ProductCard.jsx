// /app/(components)/ProductCard.jsx
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const { name, price, originalPrice, discount, images, rating, reviews } = product;
  
  return (
    <div className="bg-gray-100 rounded-2xl p-6 relative group hover:shadow-xl transition-all duration-300 cursor-pointer">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{discount}%
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="flex items-center justify-center h-48 mb-6 relative">
        <Image
          src={images[0]}
          alt={name}
          width={180}
          height={180}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
          priority
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Product Name */}
        <h3 className="text-base font-medium text-gray-900 line-clamp-2 min-h-12">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span className="text-gray-400">({reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold text-gray-900">
            R{price.toFixed(2)}
          </p>
          {originalPrice && (
            <p className="text-sm text-gray-400 line-through">
              R{originalPrice.toFixed(2)}
            </p>
          )}
        </div>

        {/* Add to Cart Button (appears on hover) */}
        <button className="w-full bg-black text-white py-3 rounded-lg font-medium 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         flex items-center justify-center gap-2 hover:bg-gray-800">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}