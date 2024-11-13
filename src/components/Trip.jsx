import Image from "next/image";
import ChooseDestination from "@/assets/trip/choose_destination.png";
import MakePayment from "@/assets/trip/make_payment.png";
import ReachAirport from "@/assets/trip/reach_airport.png";
import TripImg from "@/assets/trip/trip.png";

const Trip = () => {
  return (
    <section>
      <div className="wrapper py-10 lg:flex">
        <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center">
          <p className="font-semibold text-tertiary text-center md:text-start">
            Easy and Fast
          </p>
          <h1 className="font-bold text-4xl my-2 2xl:text-5xl font-volkhov text-center md:text-start">
            Book your next trip in 3 easy steps
          </h1>
          <div className="mt-5 grid gap-5">
            <div className="flex items-center gap-5">
              <div className="bg-tertiary w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src={ChooseDestination}
                  alt="the-ace-solutions-services"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="font-semibold">Choose Destination</h1>
                <p className="text-tertiary w-[90%]">
                  Select your ideal travel spot for unforgettable experiences
                  and adventures waiting ahead.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src={MakePayment}
                  alt="the-ace-solutions-services"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="font-semibold">Make Payment</h1>
                <p className="text-tertiary">
                  Secure your booking by completing the payment process for a
                  seamless experience.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-secondary w-14 h-14 rounded-xl flex items-center justify-center">
                <Image
                  src={ReachAirport}
                  alt="the-ace-solutions-services"
                  className="w-8 h-8"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="font-semibold">
                  Reach Airport on Selected Date
                </h1>
                <p className="text-tertiary">
                  Arrive at the airport on your chosen date for a smooth travel
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:w-[50%] lg:mt-0 flex items-center justify-center">
          <Image src={TripImg} alt="travel-app-trip" />
        </div>
      </div>
    </section>
  );
};

export default Trip;
