import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // For navigation
import "./Menu.css";
import { FaSearch } from 'react-icons/fa'; // Adding search icon
import 'font-awesome/css/font-awesome.min.css';

function Menu() {
  const navigate = useNavigate(); // Hook for navigation
  const [searchTerm, setSearchTerm] = useState(""); // State for search functionality

  const menuItems = [
    { name: "🍗 Chicken Rice", price: "$760",offerpricr:"$700", img: "/images/OIP (1).jfif", offer: "10% Off" },
    { name: "🍖 Roasted Chicken Rice", price: "$1800",offerpricr:"$1700", img: "/images/OIP (3).jfif", offer: "15% Off" },
    { name: "🥣 Chicken Soup", price: "$2200", offerpricr:"$2100",img: "/images/OIP.jfif", offer: "20% Off" },
    { name: "🍔 Grilled Burger", price: "$660",offerpricr:"$600", img:"/images/OIP (4).jfif", offer: "Buy 1 Get 1 Free" },
  ];

  // Filter menu items based on the search term
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (item) => {
    navigate("/order", { state: { item } }); // Navigate to Order page and pass item data
  };

  return (
    <div className="menu-container">
      <div className="H">
        <h1>Menu</h1>
        <div className="ho2">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="search"
            />
          </div>
        </div>
      </div>

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

      <hr />
      <center>
        <h2 style={{ backgroundColor: "beige" }}>
          Special <i className="fa-solid fa-gift" style={{ color: "rgb(247, 131, 54)" }}></i>
          <i style={{ color: "rgb(30, 194, 235)" }}> Offer</i>
        </h2>
        <div className="P">
          {menuItems.slice(0, 3).map((item, index) => (
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
          ))}
        </div>
      </center>

      <hr />
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
        <span style={{ fontSize: "40px" }}> 🤝</span> {/* Handshake emoji */}
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
  

    </div>
  );
}

export default Menu;
