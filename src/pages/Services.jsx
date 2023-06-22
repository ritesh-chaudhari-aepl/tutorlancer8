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
import CustomCard from "@/components/cards/CustomCard";
import user from "@/assets/user.svg";

const Services = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <div>
      <section id="services" className="bg-home8Bg text-black">
        <div className="container mx-auto max-w-screen-x lg:pt-16 md:mt-0 px-4 py-14 sm:py-24 sm:px-16 lg:py-0 ">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex flex-col items-center">
              <h6 className="tracking-wide uppercase font-Roboto font-medium text-orange-home8">
                our services
              </h6>
              <h2 className="text-3xl font-medium font-Poppins mt-2 text-blue-main sm:text-4xl">
                Pick the right services build your career
              </h2>
              {/* <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" /> */}
            </div>
            {/* <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CustomCard
              icon={<PeopleOutlinedIcon />}
              title="Apps for Mobile & Web"
              iconBgColor="#000"
            />

            <CustomCard
              icon={<AccessTimeOutlinedIcon />}
              title=" 24/7 Support"
              iconBgColor="#000"
            />

            <CustomCard
              icon={<ImportantDevicesOutlinedIcon />}
              title="live sessions"
              iconBgColor="#000"
            />

            <CustomCard
              icon={<ScienceOutlinedIcon />}
              title="Lab work"
              iconBgColor="#000"
            />

            <CustomCard
              icon={<DataUsageOutlinedIcon />}
              title="project help"
              iconBgColor="#000"
            />
            <CustomCard
              icon={<VideoCameraFrontOutlinedIcon />}
              title="video calling support"
              iconBgColor="#000"
            />

            <CustomCard
              icon={<DriveFileRenameOutlineOutlinedIcon />}
              title="writing help"
              iconBgColor="#000"
            />
            <CustomCard
              icon={<ContentPasteSearchOutlinedIcon />}
              title="homework help"
              iconBgColor="#000"
            />
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
