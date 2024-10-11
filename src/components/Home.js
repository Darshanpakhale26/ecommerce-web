import React from 'react';
import { useNavigate } from 'react-router-dom';


// Function to display star ratings based on the product rating value
const Rating = ({ value }) => {
  const fullStar = '★';
  const emptyStar = '☆';
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < value ? 'text-yellow-500' : 'text-gray-400'}>
          {index < value ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

const Home = ({ products, addToCart, buyNow }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="object-cover mb-4 rounded" />

            {/* Product Name */}
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>

            {/* Product Rating */}
            <Rating value={product.rating} />

            {/* Product Price */}
            <p className="text-gray-600 mt-2">₹{product.price}</p>

            {/* Buttons: Add to Cart & Buy Now */}
            <div className="mt-4 flex justify-between items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => buyNow(product, navigate)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
