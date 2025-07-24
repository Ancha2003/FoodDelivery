import React from "react";
import "../styles/NonVeg.css";

const NonVeg = () => {
  const nonVegMeals = [
    { name: "Chicken Biryani", img: "/images/biryani.webp", price: "₹220" },
    { name: "Butter Chicken", img: "/images/butter_chicken.webp", price: "₹250" },
    { name: "Mutton Rogan Josh", img: "/images/mutton_rogan_josh.webp", price: "₹280" },
    { name: "Fish Curry", img: "/images/fish_curry.webp", price: "₹230" },
    { name: "Egg Curry", img: "/images/egg.webp", price: "₹150" },
    { name: "Chicken Tikka", img: "/images/chicken_tikka.webp", price: "₹200" },
    { name: "Prawn Masala", img: "/images/prawn_masala.webp", price: "₹260" },
    { name: "Mutton Korma", img: "/images/mutton_korma.webp", price: "₹270" },
    { name: "Grilled Chicken", img: "/images/grilled_chicken.webp", price: "₹240" },
    { name: "Keema Pav", img: "/images/keema_pav.webp", price: "₹180" },
    { name: "Fish Fry", img: "/images/fish_fry.webp", price: "₹220" },
    { name: "Chicken Curry", img: "/images/chicken_curry.webp", price: "₹210" }
  ];

  return (
    <div className="nonveg-page">
      <h2 className="nonveg-title">Non-Vegetarian Meals</h2>
      <p className="nonveg-subtitle">Delicious meat dishes from top chefs!</p>
      <div className="nonveg-grid">
        {nonVegMeals.map((meal, index) => (
          <div key={index} className="nonveg-card">
            <img src={meal.img} alt={meal.name} className="nonveg-img" />
            <h3>{meal.name}</h3>
            <p className="price">{meal.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonVeg;
