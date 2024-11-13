import Brands from "@/components/Brands";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Subcription from "@/components/Subcription";
import Trip from "@/components/Trip";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Services />
      <Destinations />
      <Trip />
      <Brands />
      <Subcription />
      <Footer />
    </section>
  );
};

export default HomePage;
