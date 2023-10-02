import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import HeroBanner from "../components/HeroBanner";
import ProductBanner from "../components/ProductsBanner";
import Recipies from "../components/Recipies";

function Index() {
  return (
    <>
      <section className="img-sec">
        <Navbar />
        <Logo />
        <HeroBanner />
        <ProductBanner />
        <Recipies />
      </section>
    </>
  );
}

export default Index;
