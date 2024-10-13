import React from 'react'
import { useNavigate } from 'react-router-dom';

const PaySuccess = () => {

    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/ecommerce-web');
    }


  return (
    <div>
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payment Success</h1>
            <p className="text-green-500">Payment was successful. Thank you for shopping with us!</p>

            <button onClick={handleContinueShopping} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Continue Shopping
            </button>
        </div>
        
    </div>
  )
}

export default PaySuccess