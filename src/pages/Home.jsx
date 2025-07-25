import React from "react";
import HeroSection from "../components/HeroSection";
import ChefOfTheDay from "../components/ChefOfTheDay";
import BestSellingMeals from "../components/BeastSellingMeals";
import TodaysMeals from "../components/TodaysMeals";

const Home = () => {
  return (
    <>
      <section className="section hero-section">
        <HeroSection />
      </section>

      <section className="section chef-section">
        <h2 className="section-title">Chef of the Day</h2>
        <ChefOfTheDay />
      </section>

      <section className="section best-selling-section">
        <h2 className="section-title">Best Selling Meals</h2>
        <BestSellingMeals />
      </section>

      <section className="section todays-meals-section">
        <h2 className="section-title">Today’s Specials</h2>
        <TodaysMeals />
      </section>
    </>
  );
};

export default Home;
