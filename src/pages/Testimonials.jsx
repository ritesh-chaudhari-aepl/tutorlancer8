"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BiSolidQuoteAltLeft } from "react-icons/bs";
import Image from "next/image";
import demo from "../assets/testimonial5.png";
import testimonial from "../assets/testimonial8.png";

const Testimonials = () => {
  const testimonialBanner = {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // height: "100vh",
  };
  return (
    <div>
      <section
        id="testimonials"
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={testimonial}
            alt="background image"
            style={testimonialBanner}
          />
        </div>
        <div className="relative align-middle items-center m-auto">
          <div className=" text-center p-9 font-sans text-white">
            <div>Testimonial</div>
            <div className="font-serif text-3xl sm:text-4xl py-5 text-white font-bold">
              Our Success Stories
            </div>
          </div>
          <div className="flex max-w-3xl text-center gap-3 items-center m-auto">
            <button className="bg-blue-main p-4 rounded-md">
              <ArrowBackIosIcon className="text-white" />
            </button>
            <div className="bg-white py-14 rounded-xl shadow-md shadow-btnColor p-3">
              {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-left">"</span> */}
              {/* <BiSolidQuoteAltLeft className="text-pink-pinkLight" /> */}
              <div className="font-sans text-black">
                {" "}
                Tutorlancer has helped me not only understand the subject but
                master the answering techniques required to obtain a istinction.
                the material is not only well compiled and organies but helps
                immensely with revision.{" "}
              </div>
              <div className="font-serif pt-3 text-xl font-bold text-black">
                Jhon Dev
              </div>
              <div className="font-sans text-sm text-black">UI/UX Designer</div>
              {/* <span className="font-DmSerifDisplay text-5xl text-pink-pinkLight items-right">"</span> */}
            </div>
            <button className="bg-blue-main p-4 rounded-md">
              <ArrowForwardIosIcon className="text-white" />
            </button>
          </div>
          <Image
            className="m-auto rounded-xl shadow-sm shadow-pink-pinkLight bottom-10 relative"
            src={demo}
            width={100}
            height={100}
            alt="Not Found"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
