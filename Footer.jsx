import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) alert(`Thank you for signing up, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-green-600 text-white p-6 mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <strong>SA Retail Demo</strong> — Bringing SPAR/Shoprite style online
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-2 rounded text-black" required/>
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 font-bold">Subscribe</button>
        </form>
      </div>
      <div className="mt-4 flex gap-4">
        <a href="#" className="hover:underline">Contact 📞</a>
        <a href="#" className="hover:underline">About ℹ️</a>
        <a href="#" className="hover:underline">Facebook 📘</a>
        <a href="#" className="hover:underline">Twitter 🐦</a>
      </div>
    </footer>
  );
}
