import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import PricingAreaTwo from "../components/PricingAreaTwo";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />

      {/* Service Area One */}
      <ServiceAreaGroup />

      {/* Pricing Area One */}
      <PricingAreaTwo />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Service;
