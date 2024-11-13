import Image from "next/image";
import HeaderOverlay from "@/assets/overlays/header_overlay.png";
import Hero from "@/assets/hero.png";
import Button from "./Button";
import HeadingOverlay from "@/assets/overlays/heading_overlay.png";
import { FaPlay } from "react-icons/fa6";
import Aeroplane from "@/assets/overlays/plane.png";

const Header = () => {
  return (
    <header className="wrapper py-20 flex flex-col-reverse md:flex-row lg:py-10">
      <div className="absolute top-0 right-0 -z-50 flex justify-end">
        <Image
          src={HeaderOverlay}
          alt="travel-app-header-overlay"
          className="sm:w-[450px] lg:w-[40vw] xl:w-[38vw]"
        />
        <Image
          src={Aeroplane}
          alt="travel-app-aeroplane"
          className="absolute w-[120px] left-10 bottom-40 sm:top-5 sm:left-0 md:top-20 md:-left-10"
        />
        <Image
          src={Aeroplane}
          alt="travel-app-aeroplane"
          className="absolute w-[120px] right-0 -bottom-20 lg:-bottom-10"
        />
      </div>
      <div className="mt-20 text-center md:w-[50%] flex flex-col md:items-start justify-center md:mt-0 md:text-start">
        <p className="text-primary">Best Destinations around the world</p>
        <h1 className="font-volkhov font-bold text-4xl my-4 flex flex-col md:text-5xl 2xl:text-6xl">
          <span className="relative flex w-fit mx-auto md:mx-0">
            Travel, enjoy{" "}
            <Image
              src={HeadingOverlay}
              alt="travel-app-heading-overlay"
              className="absolute top-7 -right-12 -z-50 w-[155px] -rotate-3 h-[6px] md:top-10 md:-right-5"
            />
          </span>{" "}
          <span> and live a new</span> <span> and full life</span>
        </h1>
        <p className="w-[90%] mx-auto mb-5 text-tertiary md:w-full">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex gap-5 justify-center">
          <Button>Find out more</Button>
          <button className="flex items-center gap-3">
            <span className="bg-primary flex w-10 h-10 rounded-full items-center justify-center text-white shadow-main">
              <FaPlay />
            </span>
            <span className="text-tertiary">Play Demo</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center md:w-[50%]">
        <Image
          src={Hero}
          alt="travel-app-hero"
          className="h-[100%] w-[100%] sm:w-[500px] md:w-fit md:h-fit lg:h-[450px] xl:h-[550px]"
        />
      </div>
    </header>
  );
};

export default Header;
