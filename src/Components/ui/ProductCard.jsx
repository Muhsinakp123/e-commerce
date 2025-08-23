import React from 'react'

const ProductCard = ({ product }) => {
  return (
      <div className="product-card" >
            {" "}
            <div className="badge">{product.badge}</div>
            <img src={product.img} alt={product.category} />
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
              <h4>{product.category}</h4>
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
  )
}

export default ProductCard