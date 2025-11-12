import React from "react";
import { useParams } from "react-router";
import useGetToysData from "../Hooks/useGetToysData";
import { DotLoader } from "react-spinners";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const { id } = useParams();
  const { data, loader } = useGetToysData();
  const toy = data.find((t) => id == t.toyId);
  const handleTryNow = (e) => {
    // console.log(e);
    e.preventDefault();
    e.target.reset();
    toast.success("You can try the toy now");
  };
  return loader ? (
    <DotLoader color="#f32222" size={40} />
  ) : (
    <div className="p-5">
      <div className="p-5 rounded-2xl card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={toy.pictureURL} alt="Album" className="max-w-[400px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{toy.toyName}</h2>
          <h2 className="card-title text-2xl">{toy.subCategory}</h2>
          <p className="text-xl font-medium">Seller Name : {toy.sellerName}</p>
          <p className="italic">Seller Email : {toy.sellerEmail}</p>
          <p className="text-xl font-medium">{toy.description}</p>
          <div className="grid grid-cols-3">
            <p className="flex gap-2 items-center text-xl font-medium">
              {toy.rating}
              <span className="">
                <FaStar className="text-orange-400" />
              </span>
            </p>
            <p className="text-right text-xl font-medium text-[#f32222]">
              only {toy.availableQuantity} pieces left
            </p>
            <p className="text-xl text-right font-medium">$ {toy.price}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-right text-xl font-medium mb-5">
          Fill Up The Form To Try This Toy
        </h2>
        <form onSubmit={handleTryNow} className="w-1/2">
          <fieldset className="flex flex-col">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Email"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Email"
              required
            />
            <button className="btn btn-outline text-white bg-[#f32222] mt-2">
              Try Now
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ToyDetails;
