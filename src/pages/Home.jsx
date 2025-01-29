import Banner from "../components/Banner";

import Categories from "../components/Categories";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import HomeCarousel from "../components/HomeCarosuel";

import Reviews from "../components/reviews/Reviews";

import WhyChooseUs from "../components/why choose us/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="">
        <Banner />
        <HomeCarousel />
        <Categories categoryname="all" />
        <WhyChooseUs />
        <Reviews />
        <GoogleMapEmbed />
      </div>
    </>
  );
};

export default Home;
