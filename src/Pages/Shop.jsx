import { useState } from "react";
import productData, { products } from "../data/product";
import "../Styles/Shop.css";

function Shop() {
  const [productList, setProductList] = useState(products);
  const [sortBy, setSortBy] = useState("All");
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <section id="shop">
        <div className="box">
          <div className="container">
            <h1>Shop</h1>
          </div>
        </div>
      </section>
      <div className="filter-value container">
        <label className="sort">Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="all">All</option>
          <option value="name-desc">Name Descending</option>
          <option value="price-desc">Price Descending</option>
        </select>
      </div>
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
    </>
  );
}

export default Shop;
