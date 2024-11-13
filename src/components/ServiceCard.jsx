import Image from "next/image";
import Overlay from "@/assets/overlays/hover_overlay.png";

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="py-10 px-5 rounded-3xl w-[300px] hover:shadow-main transition-all duration-300 cursor-pointer relative bg-white group sm:w-auto">
      <Image
        src={Overlay}
        alt="travel-ap-hover-overlay"
        className="w-[70px] absolute -bottom-5 -left-5 -z-30 opacity-0 group-hover:opacity-100 transition-all duration-1000"
      />
      <div className="flex items-center justify-center mb-3">
        <Image src={imgSrc} alt="travel-app-services" className="w-[100px]" />
      </div>
      <h1 className="text-center font-semibold text-xl mb-3">{title}</h1>
      <p className="text-tertiary text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
