// src/components/BestSellingMeals.jsx
import React from 'react';
import '../styles/BestSellingMeals.css';

const BestSellingMeals = () => {
  const meals = [
    {
      name: 'Paneer Butter Masala',
      img: '/images/paneer.jpeg',
      price: '₹180',
      alt: 'Creamy Paneer Butter Masala served with coriander garnish'
    },
    {
      name: 'Chicken Biryani',
      img: '/images/biryani.webp',
      price: '₹220',
      alt: 'Aromatic Chicken Biryani served with raita'
    },
    {
      name: 'Veg Thali Combo',
      img: '/images/thali.webp',
      price: '₹150',
      alt: 'Full vegetarian thali with rice, roti, dal, and curry'
    },
    {
      name: 'Masala Dosa',
      img: '/images/dosa.webp',
      price: '₹100',
      alt: 'Crispy Masala Dosa served with coconut chutney and sambar'
    },
    {
      name: 'Chole Bhature',
      img: '/images/chole.webp',
      price: '₹120',
      alt: 'Spicy Chole with fluffy Bhature on a plate'
    },
    {
      name: 'Butter Chicken',
      img: '/images/biryani.webp',
      price: '₹200',
      alt: 'Rich Butter Chicken with cream and butter topping'
    },
    {
      name: 'Fried Rice & Manchurian',
      img: '/images/manchurian.webp',
      price: '₹160',
      alt: 'Chinese Fried Rice served with Manchurian balls in gravy'
    },
    {
      name: 'Cheese Pizza',
      img: '/images/pizza.webp',
      price: '₹180',
      alt: 'Cheesy Margherita Pizza fresh from the oven'
    },
    {
      name: 'Rajma Chawal',
      img: '/images/rajma.webp',
      price: '₹130',
      alt: 'Punjabi-style Rajma served with steamed basmati rice'
    }
  ];

  return (
       <section className="bestselling-section">
      <h2>🔥 Best Selling Meals</h2>
      <div className="meals-container">
        {meals.map((meal, index) => (
          <div key={index} className="meal-card">
            <img src={meal.img} alt={meal.alt} className="meal-img" />
            <h3>{meal.name}</h3>
            <p className="price">₹ {meal.price.replace("₹", "")}</p>
            <button
              className="buy-btn"
              onClick={() => handleAddToCart && handleAddToCart(meal)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>

  );
};

export default BestSellingMeals;
