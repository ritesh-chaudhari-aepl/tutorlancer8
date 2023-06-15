import React from "react";
import bgbanner from "../assets/home-banner-8.png";
import envelopeTop from "../assets/envelope-top.png";
import Image from "next/image";

const HeroSection = () => {
  const banner = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100vh",
  };
  return (
    <div>
      <section className="relative bg-cover bg-center bg-no-repeat bg-white">
        <div className="clipped-banner absolute">
          <Image src={bgbanner} alt="background image" style={banner} />
        </div>

        {/* <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25  sm:bg-gradient-to-l" /> */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-6 sm:px-6 md:flex h-auto lg:items-center justify-between lg:px-8">
          <div className="w-1/2 text-center sm:text-left">
            <h1 class="text-3xl font-Poppins uppercase text-yellow-light font-extrabold lg:text-5xl">
              Educate!
              <strong class="mt-3 block font-Poppins uppercase font-extrabold text-white">
                Smart is great
              </strong>
            </h1>

            <p class="mt-5 font-Roboto text-white max-w-lg sm:text-l/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#contact"
                class="block w-full rounded-full bg-gradient-to-r from-orange-home8 to-yellow-home8 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Become a Tutor
              </a>
            </div>
          </div>
          <div className="flex w-1/2 justify-end pt-8 sm:text-right">
            <div className="relative md:w-[80%] w-full bg-white border-1 shadow-md rounded-sm">
              <div className="envelope-top h-auto lg:pb-8 md:pb-4">
                <div className="absolute h-auto">
                  <Image src={envelopeTop} alt="background image" />
                </div>
                <div className="relative pt-4 font-Poppins font-semibold lg:leading-[3rem] leading-6 text-white lg:text-3xl xl:text-4xl text-center capitalize">
                  Get Admission <br />
                  Appointment Now
                </div>
              </div>
              <div className="md:w-3/4 mx-auto lg:py-12 md:py-6">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full gap-1">
                    <div className="relative">
                      <input
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full gap-1 ">
                    <div className="relative">
                      <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full gap-1 ">
                    <div className="relative">
                      <input
                        placeholder="Phone"
                        type="number"
                        id="phone"
                        name="phone"
                        className="w-full rounded-[3px] bg-gray-100 bg-opacity-50 border border-[#D7E0EF] focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="pt-4 w-full gap-2">
                    <button
                      // onClick={showToastMessage}
                      className="w-full justify-center flex uppercase mx-auto bg-gradient-to-r from-orange-home8 to-yellow-home8 rounded-lg md:py-2 text-white px-4 py-3"
                    >
                      Request appointment
                    </button>
                    {/* <ToastContainer /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
