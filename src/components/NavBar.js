// src/components/NavBar.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavBar({ cartItems }) {
  const navigate = useNavigate();
  const HandleLogin = (e) => {
    
    navigate('/login'); // Redirect to home page after login 
   
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">Darshan</Link>
      </div>

      {/* Search Bar */}
      <div className="flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-full p-2 rounded-md text-black"
        />
      </div>

      {/* Right Section - Login and Cart */}
      <div className="flex items-center space-x-6">
        {/* Login Button */}
        <button onClick={HandleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
