/* eslint-disable react/prop-types */

// const CustomCard = ({ icon, iconBgColor, title, description }) => {
//     return (
//       <div className="rounded-md bg-white p-6 gap-5 flex flex-col mb-10 sm:items-start sm:justify-start items-center justify-center">
//         <div className="">
//           {/* icon */}
//           <div
//             className={`w-14 h-14 rounded-[15px] items-center justify-center flex ${iconBgColor}`}
//           >
//             <Image src={icon} alt="Icon" className="w-7 h-7" />
//           </div>
//         </div>
//         <span className="font-semibold md:text-base font-Inter sm:text-[24px]">{title}</span>
//         <p className="text-sm capitalize md:text-[14px] sm:text-left text-center font-medium font-Inter">{description}</p>
//       </div>
//     );
//   };
//   export default CustomCard;

/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import classNames from "classnames";

const CustomCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = classNames(
    "flex flex-row text-black gap-3 items-center bg-white cursor-pointer text-left md:text-left rounded-xl border border-pink-500/10 p-4 x-6 shadow-md transition",
    {
      "hover:shadow-blue-light bg-blue-main -translate-y-4": isHovered,
    }
  );
  // const cardClasses = classNames(
  //   "flex flex-row mb-4",
  //   {
  //     "bg-white hover:shadow-pink-hotPink": isHovered,
  //   }
  // );

  const iconClasses = classNames(
    "rounded-full text-blue-main border-2 w-auto h-fit p-4 transition bg-primaryWhite",
    {
      "border-blue-main": isHovered,
    }
  );

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={iconClasses}>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg sm:text-xl capitalize font-medium font-Roboto mb-2">
          {title}
        </span>
        <p className="text-sm md:text-[14px] sm:text-left font-Inter mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
