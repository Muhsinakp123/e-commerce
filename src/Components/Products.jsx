import React, { useCallback, useState } from "react";
import "../Styles/Product.css";
import { products } from "../data/product";
import ProductCard from "./ui/ProductCard";

const tabList = [
  { value: "all", label: "All" },
  { value: "sale", label: "Sale" },
  { value: "bestseller", label: "Best seller" },
  { value: "featured", label: "Featured" },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [productList, setProductList] = useState(products);
  // const [filterValue, setFilterValue] = useState(null);
  // const [searchKey, setSearchKey] = useState("");

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

  const handleTabChange = useCallback((value) => {
    setActiveTab(value);

    if (value !== "all")
      setProductList(products.filter((product) => product[value] === true));
    if (value === "all") setProductList(products);
  },[]);
  
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
        {productList.map((product, idx) => <ProductCard product={product} key={idx}/>)}
      </div>
    </section>
  );
};

export default Products;
