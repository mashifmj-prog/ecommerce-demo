import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="relative border rounded p-4 shadow hover:shadow-lg transition">
      {product.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          {product.discount}
        </div>
      )}
      {product.bestSeller && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          Best Seller
        </div>
      )}
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2"/>
      <h2 className="font-bold">{product.name}</h2>
      <p>R{product
