"use client";
import React from "react";
import { useState, useEffect } from "react";

import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "@/components/navbar/MobileNav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <header
      className={`${
        scroll
          ? "top-0 z-30 sm:top-0 sm:py-10 bg-primaryWhite shadow-2xl overflow-hidden"
          : "top-0 sm:top-0 py-10"
      } py-4 sm:py-7 fixed w-full transition-all z-10 bg-primaryWhite`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a
              className="block font-bold text-2xl text-blue-main tracking-wide"
              href="/"
            >
              Logo
            </a>
          </div>

          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="#aboutus"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="#services"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="#features"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="#testimonial"
                  >
                    Review
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="/"
                  >
                    Become A Tutor
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition font-Poppins font-medium hover:text-gray-500/75"
                    href="/"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-full bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-main shadow"
                href="/"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-full bg-gradient-to-r from-orange-home8 to-yellow-home8 px-5 py-2.5 text-sm font-medium text-white"
                  href="/"
                >
                  Sign Up
                </a>
              </div>
            </div>

            <div className="block lg:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <HiOutlineX className="text-3xl text-primary" />
                ) : (
                  <AiOutlineMenu className="text-3xl text-secondary" />
                )}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg> */}
              </button>
            </div>
            <div
              className={`${
                isMobile ? "left-0" : "-left-full"
              }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
            >
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
