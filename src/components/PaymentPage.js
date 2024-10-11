import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Safely extract product from state

  // If no product is passed, redirect to home or display a message
  if (!product) {
    return (
      <div className="container mx-auto p-4">
        <p>No product selected for purchase. Please select a product.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    console.log(`Processing payment for ${product.name}`);
    navigate('/success'); // After payment, redirect to success page
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>

      <div className="border rounded-lg p-4">
        <img src={product.image} alt={product.name} className="object-cover mb-4 rounded" />
        <h2 className="text-lg font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">₹{product.price}</p>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePayment}
        >
          Proceed to Pay ₹{product.price}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
