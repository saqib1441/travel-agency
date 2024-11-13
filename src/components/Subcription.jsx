import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import Button from "./Button";
import Image from "next/image";
import Overlay1 from "@/assets/overlays/share_overlay.png";

const Subcription = () => {
  return (
    <section className="py-10 mt-10">
      <div className="wrapper bg-primary/10 py-10 px-5 flex flex-col gap-10 rounded-tl-[100px] rounded-br-[100px] relative sm:py-24">
        <div className="absolute -right-5 -top-5">
          <Image
            src={Overlay1}
            alt="travel-app"
            className="w-[60px] h-[60px]"
          />
        </div>
        <h1 className="font-semibold text-3xl text-center sm:w-[70%] sm:mx-auto text-tertiary">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>
        <form className="flex flex-col gap-3 sm:flex-row sm:justify-center md:w-[50%] mx-auto">
          <div className="bg-white flex items-center px-5 py-2 gap-3 rounded-lg w-full">
            <span className="text-xl">
              <FaRegEnvelope />
            </span>
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white w-full py-1 focus:outline-none"
            />
          </div>
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Subcription;
