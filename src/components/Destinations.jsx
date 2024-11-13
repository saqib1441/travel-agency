import DestinationCard from "./DestinationCard";
import SectionTitle from "./SectionTitle";
import Rome from "@/assets/destinations/rome.png";
import London from "@/assets/destinations/london.png";
import Eruope from "@/assets/destinations/europe.png";

const Destinations = () => {
  const data = [
    {
      imgSrc: Rome,
      title: "Rome, Italy",
      price: "$5.42k",
      days: "10",
    },
    {
      imgSrc: London,
      title: "London, UK",
      price: "$4.2k",
      days: "12",
    },
    {
      imgSrc: Eruope,
      title: "Full Europe",
      price: "$15k",
      days: "28",
    },
  ];
  return (
    <section className="py-10 wrapper">
      <SectionTitle slogan="Top Selling" title="Top Destinations" />
      <div className="mt-10 grid gap-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((destination, index) => (
            <DestinationCard
              key={index}
              imgSrc={destination.imgSrc}
              title={destination.title}
              price={destination.price}
              days={destination.days}
            />
          ))}
      </div>
    </section>
  );
};

export default Destinations;
