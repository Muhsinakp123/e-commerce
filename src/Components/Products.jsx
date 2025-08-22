import React, { useState } from "react";
import "../Styles/Product.css";
import { products } from "../data/product";

const tabList = [
  { value: "all", label: "All" },
  { value: "sale", label: "Sale" },
  { value: "bestseller", label: "Best seller" },
  { value: "featured", label: "Featured" },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [productList, setProductList] = useState(products);
  const [filterValue, setFilterValue] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  // const handlePriceFilter = (value) => {
  //   setFilterValue(value);
  //   if (value === "low") {
  //     setProductList(products.filter((p) => p.price < 50));
  //   } else if (value === "high") {
  //     setProductList(products.filter((p) => p.price >= 50));
  //   } else {
  //     setProductList(products);
  //   }
  // };

  const handleTabChange = (value) => {
    setActiveTab(value);
    //  console.log(value, ":  value")
    //  console.log(activeTab, ":  active tab")

    if (value !== "all")
      setProductList(products.filter((product) => product[value] === true));
    if (value === "all") setProductList(products);
  };

  return (
    <section id="products-section">
      <h5>Check Our All Products</h5>
      <h2>OUR PRODUCTS</h2>
      <div className="filter-buttons container">
        {tabList.map((item, idx) => (
          <button
            className={activeTab === item.value ? "active" : ""}
            key={idx}
            onClick={() => handleTabChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* <select onChange={(e) => handlePriceFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="low">Below $50</option>
        <option value="high">Above $50</option>
      </select> */}

      <div className="products-grid container">
        {productList.map((product, idx) => (
          <div className="product-card" key={idx}>
            {" "}
            <div className="badge">{product.badge}</div>
            <img src={product.img} alt={product.title} />
            <div className="icons">
              <button data-tooltip="Quick View">
                <i className="fas fa-search"></i>
              </button>
              <button data-tooltip="Add to Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <button data-tooltip="Add to Cart">
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
            <div className="product-info">
              <h4>{product.title}</h4>
              <div className="price-section">
                <div className="price">${product.price.toFixed(2)}</div>
                <div className="old-price">${product.oldPrice.toFixed(2)}</div>
              </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
