"use client";
import React from "react";
import Image from "next/image";
import feature from "../assets/feature5.png";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SellIcon from "@mui/icons-material/Sell";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";

const Features = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <section id="features" className="bg-white text-black">
      <div className="mx-auto max-w-screen-x  lg:mt-0 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-2 sm:text-4xl">Features</h2>
            <span className="h-[2px] bg-blue-main  w-16 mb-4" />
          </div>
          <p className="mt-4 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-12 items-center grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 ">
          <div className="flex flex-col gap-4">
            <a className="text-center items-center flex flex-col md:items-end rounded-xl border text-right border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full bg-pink-pinkLight w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <HeadphonesOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl capitalize font-bold text-black">
                24/7 support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="text-center items-center flex flex-col md:items-end rounded-xl border text-right border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full bg-pink-pinkLight w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <AccessAlarmIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl capitalize font-bold text-black">
                on time delivery
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="text-center items-center flex flex-col md:items-end rounded-xl border text-right border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full bg-pink-pinkLight w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <SellIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl capitalize font-bold text-black">
                competitive pricing
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
          <div>
            <Image src={feature}></Image>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-center items-center flex flex-col rounded-xl border md:text-left md:items-start border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full bg-pink-pinkLight w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <FindInPageOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl capitalize font-bold text-black">
                plagiarism free
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="text-center items-center flex flex-col rounded-xl border md:text-left md:items-start border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full bg-pink-pinkLight w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <MonetizationOnOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl capitalize font-bold text-black">
                refundable
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="text-center items-center flex flex-col rounded-xl border md:text-left md:items-start border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full bg-pink-pinkLight w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <DonutLargeOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl capitalize font-bold text-black">
                unlimited revisions
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
