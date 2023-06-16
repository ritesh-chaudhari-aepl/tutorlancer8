"use client";
import React from "react";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import SellIcon from "@mui/icons-material/Sell";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import MainCard from "@/components/cards/MainCard";

const Features = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <section id="features" className="bg-white text-black">
      <div className="container mx-auto max-w-screen-x  lg:mt-6 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
        {/* <div className="mx-auto max-w-lg text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-2 sm:text-4xl">Features</h2>
            <span className="h-[2px] bg-blue-main  w-16 mb-4" />
          </div>
          <p className="mt-4 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div> */}

        <div className="mt-12 px-8 lg:px-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MainCard
              icon={<HeadphonesOutlinedIcon />}
              title="24/7 Support"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />

            <MainCard
              icon={<AccessAlarmIcon />}
              title="on time delivery"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />

            <MainCard
              icon={<SellIcon />}
              title="competitive pricing"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />

            <MainCard
              icon={<FindInPageOutlinedIcon />}
              title="plagiarism free"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />

            <MainCard
              icon={<MonetizationOnOutlinedIcon />}
              title="refundable"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />
            <MainCard
              icon={<DonutLargeOutlinedIcon />}
              title="unlimited revisions"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />

            {/* <MainCard
              icon={<DriveFileRenameOutlineOutlinedIcon />}
              title="writing help"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            />
            <MainCard
              icon={<ContentPasteSearchOutlinedIcon />}
              title="homework help"
              iconBgColor="#000"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium."
            /> */}
          </div>
      </div>
    </section>
  );
};

export default Features;
