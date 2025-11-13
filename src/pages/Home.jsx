import React from "react";
import useGetToysData from "../Hooks/useGetToysData";
import { BounceLoader } from "react-spinners";
import CarouselImage from "../components/CarouselImage";
import ToysCard from "./../components/ToysCard";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const { data, loader } = useGetToysData();
  if (loader) return <BounceLoader color="#f32222" size={40}></BounceLoader>;
  return loader ? (
    <BounceLoader color="#f32222" size={40}></BounceLoader>
  ) : (
    <>
      {/* Hero section */}
      <div className="w-11/12 mx-auto flex flex-col justify-between items-center md:flex-row gap-2 md:gap-10">
        <div className="w-full">
          <h2 className="text-center text-3xl/10 italic md:text-5xl/20 font-bold text-[#f32222]">
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
        <h3 className="text-2xl/8 md:text-4xl/16 font-bold italic text-[#f32222] text-center mb-5 md:mb-10">
          Our Popular Toys
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center place-items-center">
          {data.map((toy) => (
            <ToysCard key={toy.toyId} toy={toy}></ToysCard>
          ))}
        </div>
      </div>
      {/* Customer reviews */}
      <section className="mt-10 w-11/12 mx-auto">
        <h2 className="text-2xl/8 md:text-4xl/16 font-bold italic text-center mb-6 text-[#f32222]">
          What Parents Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card shadow p-5 bg-white text-center">
            <h3 className="font-semibold text-lg mb-2">Ayesha Rahman</h3>
            <p className="italic text-gray-600 mb-3">
              The Lego set was amazing! My kids loved building with it.
            </p>
            <p className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-orange-400" />
              ))}
            </p>
          </div>
          <div className="card shadow p-5 bg-white text-center">
            <h3 className="font-semibold text-lg mb-2">Maya Islam</h3>
            <p className="italic text-gray-600 mb-3">
              Fast delivery and great packaging. Will buy again!
            </p>
            <p className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-orange-400" />
              ))}
            </p>
          </div>
          <div className="card shadow p-5 bg-white text-center">
            <h3 className="font-semibold text-lg mb-2">Tanvir Ahmed</h3>
            <p className="italic text-gray-600 mb-3">
              Toys are very creative and safe for kids!
            </p>
            <p className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-orange-400" />
              ))}
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <div className="mt-10 w-11/12 mx-auto">
        <h2 className="text-2xl/8 md:text-4xl/16 font-bold italic text-center mb-5 md:mb-10 text-[#f32222]">
          Why Choose Toyzy Toys?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">Boost Creativity</h3>
            <p>
              Our toys inspire kids to imagine, design, and create their own
              worlds.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">
              Develop Problem Solving
            </h3>
            <p>
              Building blocks and puzzles enhance logic and cognitive skills.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow">
            <h3 className="text-xl font-semibold mb-2">Motor Skill Growth</h3>
            <p>
              Interactive toys help improve coordination and fine motor
              abilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
