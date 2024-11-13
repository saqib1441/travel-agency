import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const DestinationCard = ({ imgSrc, title, price, days }) => {
  return (
    <div className="rounded-3xl overflow-hidden shadow-main pb-5 w-[300px] sm:w-auto">
      <div className="h-[300px] sm:h-auto overflow-hidden w-full">
        <Image src={imgSrc} alt="travel-app-destination" />
      </div>
      <div className="px-5 my-3 flex justify-between items-center text-tertiary">
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div className="px-5 flex items-center gap-3">
        <span className="text-lg">
          <FaLocationArrow />
        </span>
        <span className="text-tertiary">{days} Days trip</span>
      </div>
    </div>
  );
};

export default DestinationCard;
