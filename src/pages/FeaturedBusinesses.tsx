import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import construction from "../../public/construction.png";
import landscapes from "../../public/Landscapes.png";
import plumbing from "../../public/plumbing.png";
import Image from "next/image";
import { useState } from "react";

function FeaturedBusinesses() {
  const featured = [
    plumbing,
    landscapes,
    construction,
    plumbing,
    landscapes,
    construction,
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: (
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.46875 15.7891L1.9942 8.84359L9.46875 1.89811"
          stroke="#01272F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    nextArrow: (
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.20312 1.89062L8.67768 8.8361L1.20312 15.7816"
          stroke="#01272F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1340px] m-auto p-5">
      <Slider {...settings}>
        {featured.map((feature, index) => (
          <div className="p-10 drop-shadow-md hover:drop-shadow-2xl border-4 shadow-lg px-2 w-[422px] h-[370px] mr-[27px] flex-wrap space-x-4">
            <Image
              className="rounded-lg"
              src={feature}
              alt={index.toString()}
            />
            <div className="flex flex-col p-[20px]">
              <h2 className="text-xl">Browns H20 proofing systems</h2>
            </div>
          </div>
          // <div
          //   key={index}
          //   className="border-1 w-[422px] h-[250px] gap-[27px] rounded-xl px-2 shadow-lg bg-slate-300"
          // >
          //   <div className="cart-top">
          //     <Image src={feature} alt={index.toString()} />
          //   </div>
          //   <div className="card-bottom">
          //     <h2 className="text-xl">Browns H20 proofing systems</h2>
          //     <p>Randburg gaunteg</p>
          //   </div>
          // </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedBusinesses;
