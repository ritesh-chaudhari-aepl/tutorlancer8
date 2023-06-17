/* eslint-disable react/prop-types */

// const MainCard = ({ icon, iconBgColor, title, description }) => {
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
//   export default MainCard;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";

const MainCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = classNames(
    "flex flex-row text-white gap-3 justify-center bg-blue-main cursor-pointer text-left md:text-left rounded-xl shadow-pink-light  border border-pink-500/10 xl:p-8 p-6 shadow-md transition mb-4",
    {
      "hover:shadow-blue-light -translate-y-4": isHovered,
    }
  );
  // const cardClasses = classNames(
  //   "flex flex-row mb-4",
  //   {
  //     "bg-white hover:shadow-pink-hotPink": isHovered,
  //   }
  // );

  const iconClasses = classNames(
    "rounded-full text-blue-main border-2 w-auto h-fit p-4 transition bg-primaryWhite mb-4",
    {
      "bg-blue-main border-blue-main": isHovered,
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
        <span className="text-lg capitalize font-Poppins font-semibold mb-2">
          {title}
        </span>
        <p className="text-sm lg:text-[14px] lg:leading-6 lg:tracking-wide xl:tracking-normal font-Roboto font-medium sm:text-left mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MainCard;
