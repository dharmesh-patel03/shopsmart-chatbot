import React, { useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from './ProductCard';

const ChatWindow = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    const results = await fetchProducts(query);
    setProducts(results);
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Search
        </button>
      </div>
      <div className="space-y-2">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
