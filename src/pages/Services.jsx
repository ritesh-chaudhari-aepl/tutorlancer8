"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

const Services = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <div>
      <section id="services" className="bg-white text-black">
        <div className="mx-auto max-w-screen-x  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>

            <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <PeopleOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl uppercase font-bold text-black">
                Online Tutoring
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <AccessTimeOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl uppercase font-bold text-black">
                24/7 Support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <ImportantDevicesOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl uppercase font-bold text-black">
                live sessions
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <ScienceOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                Lab work
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <DataUsageOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                project help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <VideoCameraFrontOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                video calling support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <DriveFileRenameOutlineOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                writing help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left rounded-xl border border-pink-500/10 p-8 shadow-md shadow-pink-light transition hover:border-pink-light hover:shadow-pink-light">
              <div className="rounded-full border-2 bg-white w-fit text-blue-main p-4 hover:text-white hover:bg-blue-main transition hover:border-blue-main">
                <ContentPasteSearchOutlinedIcon style={iconstyle} />
              </div>

              <h2 className="mt-4 text-xl font-bold uppercase text-black">
                homework help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
