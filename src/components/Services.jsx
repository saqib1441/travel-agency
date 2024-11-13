import SectionTitle from "./SectionTitle";
import Image from "next/image";
import CalculatedWeather from "@/assets/services/calculated_weather.png";
import BestFlights from "@/assets/services/best_flights.png";
import LocalEvents from "@/assets/services/local_events.png";
import Customization from "@/assets/services/customization.png";
import ServiceCard from "./ServiceCard";
import Overlay from "@/assets/overlays/subcription_overlay.png";

const Services = () => {
  const data = [
    {
      imgSrc: CalculatedWeather,
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      imgSrc: BestFlights,
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      imgSrc: LocalEvents,
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      imgSrc: Customization,
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
    },
  ];
  return (
    <section className="py-20 lg:py-28 wrapper relative">
      <Image
        src={Overlay}
        alt="services-overlay"
        className="absolute right-0 top-24 w-[100px] sm:w-[130px] md:-right-10 lg:-right-20 xl:w-[170px]"
      />
      <div>
        <SectionTitle slogan="CATEGORY" title="We Offer Best Services" />
      </div>
      <div className="mt-10 grid gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data &&
          data.map((service, index) => (
            <ServiceCard
              key={index}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
