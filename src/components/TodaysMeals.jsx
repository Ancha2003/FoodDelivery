import React from "react";

import "../styles/TodaysMeals.css";

const meals = [
  {
    name: "Paneer Butter Masala",
    description: "Served with roti and salad",
    price: 120,
    image: "/images/paneer.jpeg",
  },
  {
    name: "Chole Bhature",
    description: "Spicy chole with fluffy bhature",
    price: 100,
    image: "/images/chole.webp",
  },
  {
    name: "Rajma Chawal",
    description: "Comforting rajma served with rice",
    price: 90,
    image: "/images/rajma.webp",
  },
  {
    name: "Aloo Paratha",
    description: "With butter and curd",
    price: 70,
    image: "/images/paratha.webp",
  },
  {
    name: "Veg Biryani",
    description: "Served with raita",
    price: 130,
    image: "/images/vegBiryani.webp",
  },
  {
    name: "Masala Dosa",
    description: "With coconut chutney and sambar",
    price: 80,
    image: "/images/dosa.webp",
  },
  {
    name: "Pav Bhaji",
    description: "Buttery pav and spicy bhaji",
    price: 90,
    image: "/images/pav.webp",
  },
  {
    name: "Fried Rice & Manchurian",
    description: "Combo meal",
    price: 140,
    image: "/images/manchurian.webp",
  },
  {
    name: "Dal Makhani",
    description: "Creamy dal with jeera rice",
    price: 110,
    image: "/images/daal.webp",
  },
  {
    name: "Palak Paneer",
    description: "Served with naan",
    price: 120,
    image: "/images/palak.webp",
  },
  {
    name: "Egg Curry",
    description: "Served with rice",
    price: 100,
    image: "/images/egg.webp",
  },
  {
    name: "Mix Veg",
    description: "Healthy and spicy",
    price: 90,
    image: "/images/mixveg.webp",
  },
  {
    name: "Poha & Jalebi",
    description: "Perfect breakfast",
    price: 60,
    image: "/images/pohaJlebi.webp",
  },
  {
    name: "Dhokla",
    description: "Steamed and soft",
    price: 50,
    image: "/images/Dhokla.webp",
  },
  {
    name: "Kadhi Chawal",
    description: "Tangy kadhi with rice",
    price: 85,
    image: "/images/kadhi.webp",
  },
  {
    name: "Matar Paneer",
    description: "Served with paratha",
    price: 110,
    image: "/images/matar.webp",
  },
  {
    name: "Idli Sambar",
    description: "South Indian classic",
    price: 70,
    image: "/images/idli.webp",
  },
  {
    name: "Aloo Gobi",
    description: "Dry veggie with roti",
    price: 85,
    image: "/images/aloogobi.webp",
  },
  {
    name: "Kachori Sabzi",
    description: "With spicy curry",
    price: 65,
    image: "/images/kachori.webp",
  },
  {
    name: "Stuffed Capsicum",
    description: "Tandoori style",
    price: 100,
    image: "/images/capsicum.webp",
  },
];

const TodaysMeals = ({ handleAddToCart }) => {
  return (
    <section className="meals-section">
      <h2 className="meals-title">Today’s Meals</h2>
      <div className="meals-grid">
        {meals.map((meal, index) => (
          <div className="meal-card" key={index}>
<img
  src={meal.image}
  alt={meal.name}
  loading="lazy"
  onError={(e) => (e.target.src = "/images/default-meal.webp")}
/>
            <div className="meal-info">
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
              <span className="price">₹{meal.price}</span>
            <button
  className="order-btn"
  onClick={() => handleAddToCart(meal)}
  aria-label={`Add ${meal.name} to cart`}
>
  Add to Cart
</button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodaysMeals;