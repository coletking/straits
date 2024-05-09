// src/components/ProductCard.tsx
import React from 'react';
import { formatNumber } from '../Services/Utility';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  productPrice: number;
  onBuyNow: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  productPrice,
  onBuyNow,
}) => {
  
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={productName} className="w-full h-[40vh]" /> 
      <div className="p-4">
        <h2 className="text-sm">{productName}</h2>
        <p className="text-sm text-black font-normal mt-4">${formatNumber(productPrice)}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={onBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
