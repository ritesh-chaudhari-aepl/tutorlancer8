/* eslint-disable react/prop-types */
"use client";
import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Nav from "./navbar/Navbar";
import MobileNav from "./navbar/MobileNav";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../assets/logo2-nobg.png";
import Image from "next/image";

function Header({ myRef }) {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });
  function handleScroll(section) {
    let value = document.getElementById(section);
    console.log(value);
    if (value) {
      value.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
  return (
    <header
      className={`${
        isActive
          ? "top-0 z-30 sm:top-0 sm:py-4 bg-primaryWhite shadow-2xl overflow-hidden"
          : "top-0 sm:top-0 py-10"
      } py-4 sm:py-0 fixed w-full transition-all z-10 bg-violet-home7`}
    >
      <div className="mx-auto max-w-screen-2xl lg:max-w-screen-xl px-4 pt-3 sm:px-6 flex justify-between items-center">
        {/* logo2-nobg */}
        <a href="#">
          {/* <span className="font-Inter font-bold tracking-[10px] text-2xl uppercase sm:text-[30px]">
            logo2-nobg
          </span> */}
          <Image src={logo} className="md:w-24 w-20" alt="logo" />
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        {/* <div className="hidden sm:flex lsm:items-center sm:gap-3"> */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Nav ref={myRef} />
        </div>
        {/* <div className="hidden sm:block"> */}
        <div className="flex">
          <a
            href="#"
            className="flex gap-2 items-center rounded-full bg-gradient-to-r from-orange-home8 to-yellow-home8 md:px-8 md:py-4 px-3 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            <BsWhatsapp className="md:text-xl md:font-bold text-lg font-normal" />
            Chat on Whatsapp
          </a>
          {/* <a
            onClick={() => handleScroll("contact")}
            className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Contact Us
          </a> */}
          {/* cta button - initially hidden - show on desktop mode */}
          {/* mobile nav trigger btn - hidden on desktop */}
          <button
            className="lg:hidden md:ml-4 ml-2"
            onClick={() => setMobileNav(!mobileNav)}
          >
            {mobileNav ? (
              <HiOutlineX className="text-3xl text-orange-500" />
            ) : (
              <AiOutlineMenu className="text-3xl text-orange-500" />
            )}
          </button>
          {/* mobile nav - hidden on desktop */}
        </div>
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] block lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
