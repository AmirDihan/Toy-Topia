import React from "react";

const CarouselImage = ({ imageURL, id, backward, forward }) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img
        src={imageURL}
        className="max-w-[1000px] mx-auto max-h-[600px]  mt-10"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={backward} className="btn btn-circle">
          ❮
        </a>
        <a href={forward} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselImage;
