import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const ToysCard = ({ toy }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/toys/${toy.toyId}`);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={toy.pictureURL} alt="Shoes" className="h-[300px] w-[400px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">
          {toy.toyName}
          <div className="badge bg-[#f32222] text-white">{toy.subCategory}</div>
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
          <button
            onClick={handleViewMore}
            className="btn btn-outline"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
