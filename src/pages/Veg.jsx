import React from "react";
import "../styles/Veg.css";

const vegDishes = [
  {
    name: "Paneer Butter Masala",
    description: "Rich and creamy paneer dish cooked in tomato gravy.",
    img: "/images/paneer.jpeg",
    price: "₹180",
  },
  {
    name: "Chole Bhature",
    description: "Spicy chickpeas served with fluffy fried bread.",
    img: "/images/chole.webp",
    price: "₹150",
  },
  {
    name: "Masala Dosa",
    description: "Crispy dosa filled with spicy mashed potatoes.",
    img: "/images/dosa.webp",
    price: "₹100",
  },
  {
    name: "Veg Pulao",
    description: "Aromatic rice with vegetables and spices.",
    img: "/images/vegBiryani.webp",
    price: "₹120",
  },
  {
    name: "Aloo Paratha",
    description: "Wheat flatbread stuffed with seasoned mashed potatoes.",
    img: "/images/paratha.webp",
    price: "₹80",
  },
  {
    name: "Rajma Chawal",
    description: "Red kidney beans in gravy served with rice.",
    img: "/images/rajma.webp",
    price: "₹110",
  },
  {
    name: "Palak Paneer",
    description: "Paneer cubes in creamy spinach sauce.",
    img: "/images/palak.webp",
    price: "₹170",
  },
  {
    name: "Baingan Bharta",
    description: "Roasted eggplant mashed and cooked with spices.",
    img: "/images/baingan.webp",
    price: "₹130",
  },
  {
    name: "Mixed Veg Curry",
    description: "A variety of vegetables cooked in spicy curry.",
    img: "/images/mixedveg.webp",
    price: "₹140",
  },
  {
    name: "Kadhi Pakora",
    description: "Gram flour dumplings in yogurt-based curry.",
    img: "/images/kadhi.webp",
    price: "₹100",
  },
  {
    name: "Tandoori Roti",
    description: "Clay oven baked whole wheat flatbread.",
    img: "/images/chapati.webp",
    price: "₹20",
  },
  {
    name: "Veg Biryani",
    description: "Spiced rice dish loaded with vegetables.",
    img: "/images/vegBiryani.webp",
    price: "₹160",
  },
  {
    name: "Dhokla",
    description: "Steamed savory gram flour cake from Gujarat.",
    img: "/images/Dhokla.webp",
    price: "₹90",
  },
  {
    name: "Veg Momos",
    description: "Steamed dumplings filled with spiced vegetables.",
    img: "/images/momos.webp",
    price: "₹70",
  },
  {
    name: "Stuffed Capsicum",
    description: "Bell peppers filled with spiced potato mixture.",
    img: "/images/capsicum.webp",
    price: "₹150",
  },
  {
    name: "Matar Paneer",
    description: "Paneer and peas in a mildly spicy curry.",
    img: "/images/matar.webp",
    price: "₹160",
  },
  {
    name: "Gobi Manchurian",
    description: "Indo-Chinese crispy cauliflower in spicy sauce.",
    img: "/images/manchurian.webp",
    price: "₹120",
  },
  {
    name: "Vegetable Korma",
    description: "Mixed veggies in a rich creamy curry.",
    img: "/images/korma.webp",
    price: "₹150",
  },
  {
    name: "Aloo Gobi",
    description: "Classic dry curry of potato and cauliflower.",
    img: "/images/aloogobi.webp",
    price: "₹100",
  },
  {
    name: "Paneer Tikka",
    description: "Grilled paneer cubes with spices and veggies.",
    img: "/images/paneer.jpeg",
    price: "₹180",
  },
  {
    name: "Methi Thepla",
    description: "Gujarati spiced flatbread made with fenugreek.",
    img: "/images/thepla.webp",
    price: "₹70",
  },
  {
    name: "Vegetable Cutlet",
    description: "Shallow-fried patties made from mashed veggies.",
    img: "/images/cutlet.webp",
    price: "₹60",
  },
];

function Veg() {
  return (
    <div className="veg-page">
      <h2 className="veg-title">Vegetarian Meals</h2>
      <p className="veg-subtitle">Enjoy our variety of delicious veg dishes!</p>
      <div className="veg-grid">
        {vegDishes.map((dish, index) => (
          <div key={index} className="veg-card">
            <img src={dish.img} alt={dish.name} className="veg-img" />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p className="veg-price">{dish.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Veg;
