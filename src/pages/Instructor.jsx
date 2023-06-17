"use client";
import React from "react";
import Image from "next/image";
import InstructorCard from "@/components/cards/InstructorCard";
import freeRegistration from "../assets/icons/free-registration.svg";
import createTutor from "../assets/icons/create-tutor.svg";
import findTutor from "../assets/icons/find-tutor.svg";
import schedule from "../assets/icons/schedule.svg";

const Instructor = () => {
  return (
    <section id="instructors" className="bg-home8Bg text-black">
      <div className="container mx-auto max-w-screen-x lg:pt-16 md:mt-0 px-4 py-14 sm:py-24 sm:px-16 lg:py-20 ">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex flex-col items-center">
            <h6 className="tracking-wide uppercase font-Roboto font-medium text-orange-home8">
              work process
            </h6>
            <h2 className="text-3xl font-medium font-Poppins mt-2 text-blue-main sm:text-4xl">
              we work best when we work together
            </h2>
            {/* <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" /> */}
          </div>
          {/* <p className="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p> */}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2">
          <InstructorCard
            icon1={freeRegistration}
            icon2={findTutor}
            icon3={schedule}
            cardtitle="for student"
            title1="Free Registration"
            title2="Find Your tutor"
            title3="schedule a lesson"
            iconBgColor="#000"
            description1="their over fly creature first fish fruitful fourth our very thing said man our land"
            description2="their over fly creature first fish fruitful fourth our very thing said man our land"
            description3="their over fly creature first fish fruitful fourth our very thing said man our land"
          />

          <InstructorCard
            icon1={freeRegistration}
            icon2={createTutor}
            icon3={schedule}
            cardtitle="for tutor"
            title1="Free Registration"
            title2="Create tutor profile"
            title3="schedule a lesson"
            iconBgColor="#000"
            description1="their over fly creature first fish fruitful fourth our very thing said man our land"
            description2="their over fly creature first fish fruitful fourth our very thing said man our land"
            description3="their over fly creature first fish fruitful fourth our very thing said man our land"
          />
        </div>
      </div>
    </section>
  );
};

export default Instructor;
