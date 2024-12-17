import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-3 rounded shadow-sm hover:shadow-md flex items-center space-x-4">
      {/* Product Image */}
      <img
        src={product.image} // Ensure product.image has a valid URL
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
        onError={(e) => e.target.src = "https://via.placeholder.com/150"} // Fallback image
      />
      
      {/* Product Details */}
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">Category: {product.category}</p>
        <p className="text-green-500 font-semibold">Price: ₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
