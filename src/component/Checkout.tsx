import React, { useState } from "react";

import { convertHtmlToText } from "../Services/Utility";
import { Product } from "../Model/prodduct";

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const plainTextDescription = convertHtmlToText(product.productDescription);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    if (selectedImageIndex < product.productImage.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Product Image */}
     <div className="">
     <div className="w-full  mb-3 relative">
        <img
          src={product.productImage[selectedImageIndex]}
          alt="Product"
          className="w-full h-[60vh] rounded-lg"
        />
        {/* Slider Controls */}
        <button
          onClick={handlePreviousImage}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow ${
            selectedImageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedImageIndex === 0}
        >
          ←
        </button>
        <button
          onClick={handleNextImage}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow ${
            selectedImageIndex === product.productImage.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={selectedImageIndex === product.productImage.length - 1}
        >
          →
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="flex flex-wrap gap-2 mb-4">
        {product.productImage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
              selectedImageIndex === index ? "border-blue-500" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
     </div>

      {/* Product Information */}
      <div className="p-2 bg-gray-100 rounded-lg ">
        <div className="underline text-[1.4rem] pb-4">Product Information</div>
        <h1 className="text-gray-600 pb-4">Product Name: {product.productName}</h1>
        <p className="text-gray-600 pb-4">Category: {product.productCategory}</p>
        <p className="text-xl font-semibold pb-4">Price: ${product.productPrice}</p>
        <p className="overflow-auto pb-4">{plainTextDescription}</p>

        {product.productDiscount > 0 && (
          <p className="text-green-500 pb-4">Discount: {product.productDiscount}%</p>
        )}

        <p
          className={`text-${
            product.isOutOfStock ? "red-500" : "green-600"
          } font-semibold pb-4`}
        >
          Status: {product.isOutOfStock ? "Out of Stock" : "In Stock"}
        </p>

        <p>Product Code: {product.productCode}</p>
        <p>Quantity Available: {product.quantity}</p>

        {/* Buy Now Button */}
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
