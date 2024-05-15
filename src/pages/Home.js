import React from "react";
import AboutAreaTwo from "../components/AboutAreaTwo";
import BannerTwo from "../components/BannerTwo";
import BlogAreaTwo from "../components/BlogAreaTwo";
import ContactAreaTwo from "../components/ContactAreaTwo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PricingAreaTwo from "../components/PricingAreaTwo";
import ServiceAreaTwo from "../components/ServiceAreaTwo";
import WorkProcessTwo from "../components/WorkProcessTwo";

const HomeTwo = () => {
  return (
    <>
      {/* Navigation Bar Two*/}
      <NavBar />

      {/* Banner Two */}
      <BannerTwo />

      {/* About Area Two */}
      <AboutAreaTwo />

      {/* About Area Two */}
      <ServiceAreaTwo />

      {/* Pricing Area Two */}
      <PricingAreaTwo />

      {/* Contact Area Two */}
      <ContactAreaTwo />

      {/* Work Process Two */}
      <WorkProcessTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Footer Two */}
      <Footer />
    </>
  );
};

export default HomeTwo;
