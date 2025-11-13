import React, { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ToysCard = ({ toy }) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const already = savedWishlist.some((item) => item.toyId === toy.toyId);
    setIsWishlisted(already);
  }, [toy.toyId]);

  const handleWishlist = () => {
    let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isWishlisted) {
      savedWishlist = savedWishlist.filter((item) => item.toyId !== toy.toyId);
      toast.error("Removed from wishlist");
    } else {
      savedWishlist.push(toy);
      toast.success("Added to wishlist");
    }
    localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
    setIsWishlisted(!isWishlisted);
  };

  const handleViewMore = () => {
    navigate(`/toys/${toy.toyId}`);
  };
  return (
    <div className="card bg-base-100 w-full h-120 md:h-130 shadow-sm relative">
      <figure className="p-4 mt-5">
        <img src={toy.pictureURL} alt="Shoes" className="rounded-md w-full h-64 object-cover" />
      </figure>
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 text-2xl"
      >
        <FaHeart
          className={isWishlisted ? "text-red-500" : "text-gray-400"}
        />
      </button>
      <div className="card-body">
        <h2 className="card-title justify-between">
          {toy.toyName}
          <div className="badge bg-[#03981a] text-white">{toy.subCategory}</div>
        </h2>
        <div className="grid grid-cols-2">
          <p className="flex gap-2 items-center text-xl font-medium">
            {toy.rating}
            <span className="">
              <FaStar className="text-orange-400" />
            </span>
          </p>
          <p className="text-right font-medium text-[#f32222]">
            only {toy.availableQuantity} pieces left
          </p>
        </div>
        <div className="card-actions justify-between">
          <div className="text-xl font-medium">$ {toy.price}</div>
          <button onClick={handleViewMore} className="btn btn-outline">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
