import React, { useState } from "react";
import Card from "./components/Card.jsx";
import Footer from "./components/Footor.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
function App() {
  let [cart, setCart] = useState(0);
  let cardData = [
    {
      id: 1,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/Belive-Black.jpg?v=1640675713",
      productName:
        "Believe T-Shirts For Men || Black || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs. 699.00",
      price: "  Rs. 379.00",
    },
    {
      id: 2,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/Alone-RoyalBlue.jpg?v=1640673354",
      productName:
        "Alone T-Shirts For Men || Royal Blue || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs . 550.00",
      price: " Rs . 430.00",
    },
    {
      id: 3,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/Never-Give-Up-TheFight.jpg?v=1640673347",
      productName:
        "The Fight T-Shirts For Men || White || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs . 990.00",
      price: "Rs 690.00",
    },
    {
      id: 4,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/DON_TDIEBEFOREYOU_REDEAD.jpg?v=1640673351",
      productName:
        "Don't-Die T-Shirts For Men || Navy Blue || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "$250.00",
      price: " $150.00",
    },
    {
      id: 5,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/Colour-Wave.jpg?v=1640675662",
      productName:
        "Colour_Wave T-Shirts For Men || White || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs . 880.00",
      price: "Rs . 680.00",
    },
    {
      id: 6,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/Marshmellow-White.jpg?v=1640675511",
      productName:
        "Marshmellow T-Shirts For Men || White || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs.550.00",
      price: " Rs.330.00",
    },
    {
      id: 7,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/DRAGONBALL.jpg?v=1640672602",
      productName:
        "Dragon-Ball T-Shirts For Men || Black || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs.1100.00",
      price: " Rs.880.00",
    },
    {
      id: 8,
      productImg:
        "https://www.thewalkdeal.com/cdn/shop/products/The-Walk-Deal-Arrow.jpg?v=1640672606",
      productName:
        "TWD Arrow T-Shirts For Men || White || Stylish Tshirts || 100% Cotton || Best T-Shirt For Men's",
      originalPrice: "Rs.950.00",
      price: " Rs.530.00",
    },
  ];
  return (
    <>
      <NavBar cart={cart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {cardData.map((card, i) => {
              return <Card key={i} props={card} setCart={setCart} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
