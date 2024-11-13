import Alitalia from "@/assets/sponsers/alitalia.png";
import Axon from "@/assets/sponsers/axon.png";
import Expedia from "@/assets/sponsers/expedia.png";
import JetStart from "@/assets/sponsers/jet_start.png";
import Qantas from "@/assets/sponsers/qantas.png";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Brands = () => {
  return (
    <section className="flex items-center justify-center flex-wrap py-10">
      <SectionTitle title="Trusted Partners" slogan="Partners" />
      <div className="grid lg:grid-cols-5 wrapper gap-10 justify-center mt-10">
        <Image
          src={Alitalia}
          alt="shoping-app-brands"
          className="w-[175px] mx-auto"
        />
        <Image
          src={Axon}
          alt="shoping-app-brands"
          className="w-[175px] mx-auto"
        />
        <Image
          src={Expedia}
          alt="shoping-app-brands"
          className="w-[175px] mx-auto"
        />
        <Image
          src={JetStart}
          alt="shoping-app-brands"
          className="w-[175px] mx-auto"
        />
        <Image
          src={Qantas}
          alt="shoping-app-brands"
          className="w-[175px] mx-auto"
        />
      </div>
    </section>
  );
};

export default Brands;
