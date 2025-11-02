import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">SA Retail Demo</h1>
        <button className="sm:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      <div className={`${open ? 'block' : 'hidden'} sm:flex sm:items-center sm:gap-4 mt-2 sm:mt-0`}>
        <Link to="/" className="block px-2 py-1 hover:underline">Home</Link>
        <Link to="/cart" className="relative block px-2 py-1 hover:underline">
          Cart
          {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
