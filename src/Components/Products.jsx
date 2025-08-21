import React from "react";
import "../Styles/Product.css";

const products = [
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p1.webp",
    badge: "Sale",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p2.webp",
    badge: "-20%",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p3.webp",
    badge: "Sale",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p4.webp",
    badge: "New",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p3.webp",
    badge: "Sale",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p4.webp",
    badge: "-30%",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p1.webp",
    badge: "New",
  },
  {
    title: "Product Title",
    price: 16.0,
    oldPrice: 20.0,
    img: "/images/p2.webp",
    badge: "-60%",
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <h5>Check Our All Products</h5>
      <h2>OUR PRODUCTS</h2>
      <div className="filter-buttons">
        <button className="active">All</button>
        <button>Sale</button>
        <button>Bestseller</button>
        <button>Featured</button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card">
            <div className="badge">{product.badge}</div>
            <img src={product.img} alt={product.title} />
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
