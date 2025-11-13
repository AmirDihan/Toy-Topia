import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = wishlist.filter((item) => item.toyId !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">No favorite toys yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((toy) => (
            <div key={toy.toyId} className="card bg-base-100 shadow-lg p-4">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="rounded-md w-full h-64 object-cover"
              />
              <h2 className="font-semibold mt-2">{toy.toyName}</h2>
              <p>${toy.price}</p>
              <button
                onClick={() => handleRemove(toy.toyId)}
                className="btn btn-sm btn-error mt-3 flex items-center gap-1"
              >
                <FaTrash /> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
