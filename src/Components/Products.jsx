import React, { act, useState } from "react";
import "../Styles/Product.css"; 
import { products } from "../data/product";

const tabList = [
  { value: 'all', label: 'All' },
  { value: 'sale', label: 'Sale' },
  { value: 'bestseller', label: 'Best seller' },
  { value: 'featured', label: 'Featured' },
]


        // <button className="active">Sale</button>
       

const Products = () => {

  const [activeTab, setActiveTab] = useState('all')
  const [productList, setProductList] = useState(products)
  const [filterValue, setFilterValue] = useState(null)
  const [searchKey, setSearchKey] = useState('')

  const handleTabChange = (value)=> {
     setActiveTab(value)
     console.log(value, ":  value")
     console.log(activeTab, ":  active tab")

     if ( value !== 'all') setProductList(products.filter(product=> product[value] === true))
     if ( value === 'all' ) setProductList(products)

  }

  return (
    <section className="products-section">
      <h5>Check Our All Products</h5>
      <h2>OUR PRODUCTS</h2>
      <div className="filter-buttons">
        {
          tabList.map((item, idx)=> <button 
                                    className={activeTab===item.value ? 'active' : ''} 
                                    key={idx}
                                    onClick={()=> handleTabChange(item.value)}
                                    >
                                      {item.label}
                                    </button>)
        }
      </div>

      <div className="products-grid">
        {productList.map((product) => (
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
