import React from "react";
import useGetToysData from "../Hooks/useGetToysData";
import { BounceLoader } from "react-spinners";
import CarouselImage from "../components/CarouselImage";
import ToysCard from "./../components/ToysCard";

const Home = () => {
  const { data, loader } = useGetToysData();
  if (loader) console.log("home loader");
  if (loader) return <BounceLoader color="#f32222" size={40}></BounceLoader>;
  return (
    <>
      {/* Hero section */}
      <div className="w-11/12 mx-auto flex flex-col justify-between items-center md:flex-row gap-2 md:gap-10">
        <div className="w-full">
          <h2 className="text-center text-3xl/10 md:text-5xl/20 font-bold text-[#f32222]">
            Inspiring Young Minds <br /> to Dream Big
          </h2>
          <h4 className="text-center mt-2 md:mt-6 text-2xl/10 md:text-3xl font-semibold">
            "For the Little Moments That Matter"
          </h4>
        </div>
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co.com/0WLyrCp/toys-spending-pandemic-Mattel.jpg"
            alt=""
          />
        </div>
      </div>
      {/* Slider section */}
      <div className="w-11/12 mx-auto mt-10">
        <h3 className="text-2xl/8 md:text-4xl/16 font-bold italic text-[#f32222] text-center">
          This Months Best Selling Toys
        </h3>
        <div className="carousel w-full mx-auto max-h-[600px]">
          <CarouselImage
            imageURL={data[0].pictureURL}
            id={"slide1"}
            backward={"#slide4"}
            forward={"#slide2"}
          ></CarouselImage>
          <CarouselImage
            imageURL={data[1].pictureURL}
            id={"slide2"}
            backward={"#slide1"}
            forward={"#slide3"}
          ></CarouselImage>
          <CarouselImage
            imageURL={data[2].pictureURL}
            id={"slide3"}
            backward={"#slide2"}
            forward={"#slide4"}
          ></CarouselImage>
          <CarouselImage
            imageURL={data[3].pictureURL}
            id={"slide4"}
            backward={"#slide3"}
            forward={"#slide1"}
          ></CarouselImage>
        </div>
      </div>
      {/* Popular Toys */}
      <div className="w-11/12 mx-auto mt-5 md:mt-10">
        <h3 className="text-2xl/8 md:text-4xl/16 font-bold italic text-[#f32222] text-center mb-5 md:mb-10">Our Popular Toys</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center place-items-center">
          {data.map((toy) => (
            <ToysCard key={toy.toyId} toy={toy}></ToysCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
