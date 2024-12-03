import React, { useState } from "react";
import "./Home.css";
import "./Menu.js";
//import "./Menu.css";
import { FaSearch } from 'react-icons/fa'; // Adding search icon
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom'; 
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const [searchTerm, setSearchTerm] = useState(""); // State for search functionality
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    alert(`Searching for: ${searchQuery}`);
  };
 

  const menuItems = [
    { name: "🍗 Chicken Rice", price: "$760",offerpricr:"$700", img: "/images/OIP (1).jfif", offer: "10% Off" },
    { name: "🍖 Roasted Chicken Rice", price: "$1800",offerpricr:"$1700", img: "/images/OIP (3).jfif", offer: "15% Off" },
    { name: "🥣 Chicken Soup", price: "$2200", offerpricr:"$2100",img: "/images/OIP.jfif", offer: "20% Off" },
    { name: "🍔 Grilled Burger", price: "$660",offerpricr:"$600", img:"/images/OIP (4).jfif", offer: "Buy 1 Get 1 Free" },
  ];
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (item) => {
    navigate("/order", { state: { item } }); // Navigate to Order page and pass item data
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h2>Welcome to Chicken Rice Shop</h2>
        <p>
          We serve the best chicken rice in town! Explore our menu and place an order now!
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearchSubmit}>
          Search
        </button>
      </div>

      {/* Image Carousel */}
      <div className="carousel">
        <div className="carousel-slide">
          <img src="/images/OIP.jfif" alt="Chicken Rice" className="carousel-image" />
          <img src="/images/OIP (1).jfif" alt="Roasted Chicken" className="carousel-image" />
          <img src="/images/OIP (3).jfif" alt="Chicken Soup" className="carousel-image" />
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="special-offer">
        <img src="/images/OIP (4).jfif" alt="Special Offer" className="offer-image" />
        <div className="offer-text">
          <h3>Special Offers</h3>
          <button className="menu-button">Order Now</button>
          <p>✨ Get a free drink with every meal! ✨</p>
          <p>🔥 Limited time only - Order now! 🔥</p>
        </div>
      </div>

      {/* Menu Section */}
     
         
      <center>
        <div className="P">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div className="p1" key={index}>
                <div className="p2">
                  <img src={item.img} alt={item.name} />
                  <div className="p21">
                    <h3>{item.name}</h3>
                    <p><sup><del>{item.price}</del></sup> {item.offerpricr}</p>
                    <h5>{item.offer}</h5>
                    <img src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt="cart" />
                    <button onClick={() => handleBuyNow(item)}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </center>









































      <div className="C">
  <div className="center">
    <div className="c">
      <div className="center1">
        <h2 style={{ color: "#ff9800" }}>Free Ship</h2>
        <span style={{ fontSize: "40px" }}>🚚</span> {/* Delivery truck emoji */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat illo sequi recusandae accusantium quod natus, aliquam necessitatibus modi esse deleniti officia corporis expedita aperiam at fuga cupiditate eaque laborum!</p>
      </div>
      <div className="center1">
        <h2 style={{ color: "#ff9800" }}>Customer</h2>
        <span style={{ fontSize: "40px" }}>🤝</span> {/* Handshake emoji */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat illo sequi recusandae accusantium quod natus, aliquam necessitatibus modi esse deleniti officia corporis expedita aperiam at fuga cupiditate eaque laborum!</p>
      </div>
      <div className="center1">
        <h2 style={{ color: "#ff9800" }}>Shop</h2>
        <span style={{ fontSize: "40px" }}>🏪</span> {/* Shop emoji */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat illo sequi recusandae accusantium quod natus, aliquam necessitatibus modi esse deleniti officia corporis expedita aperiam at fuga cupiditate eaque laborum!</p>
      </div>
    </div>
    <h3 id="w">Services</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit repellat illo sequi recusandae accusantium quod natus, aliquam necessitatibus modi esse deleniti officia corporis expedita aperiam at fuga cupiditate eaque laborum!</p>
    
    <label htmlFor="gmail">Email</label>
    <input type="email" id="gmail" />
    <input type="button" value="Submit" />
  

    {/* Social Media Icons */}
    {/* Social Media Icons */}
<div className="m">
  <a href="https://www.bing.com/search?filters=ufn%3a%22ChatGPT%22+sid%3a%22ca572841-55be-4ed6-3d83-4ffff84bdc9f%22&q=chatgpt&cvid=02e9c13634af42c7aaa11b356ab4ffb7&gs_lcrp=EgRlZGdlKgYIAhAuGEAyCQgAEEUYPBj5BzIGCAEQRRg8MgYIAhAuGEAyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQgyNDY1ajBqN6gCALACAA&FORM=ANNTA0&PC=HCTS&ntref=1"><span style={{ fontSize: "40px" }}>🐦</span></a> {/* Twitter */}
  <a href="https://www.bing.com/search?filters=ufn%3a%22ChatGPT%22+sid%3a%22ca572841-55be-4ed6-3d83-4ffff84bdc9f%22&q=chatgpt&cvid=02e9c13634af42c7aaa11b356ab4ffb7&gs_lcrp=EgRlZGdlKgYIAhAuGEAyCQgAEEUYPBj5BzIGCAEQRRg8MgYIAhAuGEAyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQgyNDY1ajBqN6gCALACAA&FORM=ANNTA0&PC=HCTS&ntref=1"><span style={{ fontSize: "40px" }}>📸</span></a> {/* Instagram */}
  <a href="https://www.bing.com/search?filters=ufn%3a%22ChatGPT%22+sid%3a%22ca572841-55be-4ed6-3d83-4ffff84bdc9f%22&q=chatgpt&cvid=02e9c13634af42c7aaa11b356ab4ffb7&gs_lcrp=EgRlZGdlKgYIAhAuGEAyCQgAEEUYPBj5BzIGCAEQRRg8MgYIAhAuGEAyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQgyNDY1ajBqN6gCALACAA&FORM=ANNTA0&PC=HCTS&ntref=1"><span style={{ fontSize: "40px" }}>🌐</span></a> {/* TikTok */}
  <a href="https://www.bing.com/search?filters=ufn%3a%22ChatGPT%22+sid%3a%22ca572841-55be-4ed6-3d83-4ffff84bdc9f%22&q=chatgpt&cvid=02e9c13634af42c7aaa11b356ab4ffb7&gs_lcrp=EgRlZGdlKgYIAhAuGEAyCQgAEEUYPBj5BzIGCAEQRRg8MgYIAhAuGEAyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQgyNDY1ajBqN6gCALACAA&FORM=ANNTA0&PC=HCTS&ntref=1"><span style={{ fontSize: "40px" }}>📘</span></a> {/* Facebook */}
  <a href="https://www.bing.com/search?filters=ufn%3a%22ChatGPT%22+sid%3a%22ca572841-55be-4ed6-3d83-4ffff84bdc9f%22&q=chatgpt&cvid=02e9c13634af42c7aaa11b356ab4ffb7&gs_lcrp=EgRlZGdlKgYIAhAuGEAyCQgAEEUYPBj5BzIGCAEQRRg8MgYIAhAuGEAyBggDEEUYOTIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhBMgYICBBFGEHSAQgyNDY1ajBqN6gCALACAA&FORM=ANNTA0&PC=HCTS&ntref=1"><span style={{ fontSize: "40px" }}>📺</span></a> {/* YouTube */}
</div>
</div>
</div>
      {/* Contact and Subscription Section */}
       
    </div>
  );
}

export default Home;
