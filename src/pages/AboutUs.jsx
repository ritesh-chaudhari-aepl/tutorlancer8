import React from "react";
import Image from "next/image";
import about from "../assets/aboutus-8.png";

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="bg-home8Bg">
        <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-12 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex flex-col items-center">
              <h6 className="tracking-wide uppercase font-Roboto font-medium text-orange-home8">
                About us
              </h6>
              <h2 className="text-3xl font-medium font-Poppins mt-2 text-blue-main sm:text-4xl">
                Educating and Empowering The community
              </h2>
              {/* <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" /> */}
            </div>
            {/* <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
          </div>
          <div className="grid grid-cols-1 pt-10 gap-8 md:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 md:order-last lg:h-full">
              <Image
                alt="Party"
                src={about}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-16 text-center md:text-left">
              <h3 className="font-medium font-Poppins text-2xl tracking-wider leading-8 mb-2">
                Get Instant Help 24x7 Online Tutoring, Live Sessions,
                Assignments
              </h3>
              <p className="font-Roboto capitalize font-medium text-[14px]">
                Alpha Tutor is an online platform that connects online tutors
                with students across the globe who seeks academic help. We help
                students across the globe who are stuck with their subjects, by
                connecting them with tutors. We aim to strategically connect
                students and tutors online
              </p>
              {/* <h3 className="font-Poppins tracking-wide text-xl leading-7 font-medium pt-4 pb-3">
                Dolor sit amet consectetur adipisicing elit. unde, quasi.
              </h3>
              <p className="font-Roboto font-medium mb-3">
                Nemo dolores, iusto pariatur corporis quis ulam harum voluptate
                porro officiis aliquam quas explicabo?
              </p>
              <p className="font-Roboto font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p> */}

              {/* <a
                href="#"
                className="mt-8 inline-block rounded-full bg-blue-main px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
