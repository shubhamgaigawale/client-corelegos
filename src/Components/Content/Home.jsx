import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import AboutUs from "./AboutUs";
import { Qualities } from "./Qualities";
import Client from "./Client";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AboutUs />
      <Qualities />
      <Client />
    </div>
  );
};

export default Home;
