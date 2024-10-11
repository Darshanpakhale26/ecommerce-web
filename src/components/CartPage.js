// src/components/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function CartPage({ cartItems, updateCartItem, removeCartItem }) {
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItem(productId, newQuantity);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      
      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <div className="text-center mt-8">
          <p className="text-xl mb-4">Your cart is empty.</p>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go to Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 border rounded-md">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="flex-1 ml-4">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded-md"
                  />
                  <button
                    className="text-white hover:bg-red-700 bg-red-500 py-1 px-2 rounded-md"
                    onClick={() => removeCartItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="text-right mt-4 font-bold text-xl">
            Total: ₹{total}
          </div>

          {/* Checkout Button */}
          <div className="text-right mt-4">
            <button onclick className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Checkout to Proceed
            </button>
          </div>

        
          
        </>
      )}
    </div>
  );
}

export default CartPage;
