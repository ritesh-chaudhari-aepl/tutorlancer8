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
      <div className="container mx-auto max-w-screen-x  lg:mt-6 md:mt-0 px-4 py-14 md:py-0 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
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

        <div className="mt-12 px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MainCard
            icon={<HeadphonesOutlinedIcon />}
            title="24/7 Support"
            iconBgColor="#000"
            description="Alpha Tutor is focused on ensuring to meet the needs of the students around the globe for their assignments."
          />

          <MainCard
            icon={<AccessAlarmIcon />}
            title="on time delivery"
            iconBgColor="#000"
            description="We make sure your work reach you on time because we know if it's not with you on-time, it will be a waste."
          />

          <MainCard
            icon={<SellIcon />}
            title="competitive pricing"
            iconBgColor="#000"
            description="Our prices are reasonable and pocket-friendly because we understand you better."
          />

          <MainCard
            icon={<FindInPageOutlinedIcon />}
            title="plagiarism free"
            iconBgColor="#000"
            description="Get plagiarism free work where each and every assignment is written from scratch to ensure that no content is plagiarized."
          />

          <MainCard
            icon={<MonetizationOnOutlinedIcon />}
            title="refundable"
            iconBgColor="#000"
            description="Your payment is secured by paypal and razorpay, upto 100% money back guarantee."
          />
          <MainCard
            icon={<DonutLargeOutlinedIcon />}
            title="unlimited revisions"
            iconBgColor="#000"
            description="You get 100% customized work as per your requirements, we are always willing to accommodate."
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
