/* eslint-disable react/prop-types */

// const InstructorCard = ({ icon, iconBgColor, title, description }) => {
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
//   export default InstructorCard;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import curve from "../../assets/ellipse-curve.png";

const InstructorCard = ({
  cardtitle,
  icon1,
  icon2,
  icon3,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = classNames(
    "flex flex-col text-black gap-12 items-center bg-white cursor-pointer text-left md:text-left rounded-md border border-pink-500/10 p-6 md:p-8 xl:p-14 shadow-md transition",
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

  const imgClasses = classNames(
    "rounded-full text-blue-main w-16 h-16 p-4 transition bg-blue-bgLight",
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
      <div className="items-center flex justify-center relative">
        <Image src={curve} className="w-20 h-auto absolute" />
        <h3 className="relative text-2xl font-Poppins font-semibold capitalize">
          {cardtitle}
        </h3>
      </div>
      <div className="gap-9 flex flex-col">
        <div className="flex flex-row gap-4">
          <Image className={imgClasses} src={icon1} />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl capitalize font-medium font-Poppins mb-2">
              {title1}
            </span>
            <p className="text-sm md:text-[14px] sm:text-left font-Inter ">
              {description1}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Image className={imgClasses} src={icon2} />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl capitalize font-medium font-Poppins mb-2">
              {title2}
            </span>
            <p className="text-sm md:text-[14px] sm:text-left font-Inter ">
              {description2}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Image className={imgClasses} src={icon3} />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl capitalize font-medium font-Poppins mb-2">
              {title3}
            </span>
            <p className="text-sm md:text-[14px] sm:text-left font-Inter ">
              {description3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
