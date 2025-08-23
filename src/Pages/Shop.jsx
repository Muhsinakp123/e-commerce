import { useEffect, useState } from "react";
import productData, { products } from "../data/product";
import "../Styles/Shop.css";
import { label } from "framer-motion/client";
import Products from "../Components/Products";
import ProductCard from "../Components/ui/ProductCard";

function Shop() {
  const [productList, setProductList] = useState(products);

  const priceOptions = [
    { value: "20", label: "Under $20" },
    { value: "40", label: "Under $40" },
  ];

  const category = [
    { value: "shirt", label: "Shirt" },
    { value: "top", label: "Top" },
    { value: "crop-top", label: "Crop Top" },
    { value: "t-shirt", label: "T-Shirt" },
    { value: "formal-top", label: "Formal Top" },
    { value: "western-top", label: "Western Top" },
  ];


  
  const [filterOptions, setFilterOptions] = useState({
    priceOptions: "",
    category: "",
  });

   

  const handleFilterChange = (type, value) => {
    // console.log(type, value, 'from filter');
    setFilterOptions((prev) => ({ ...prev, [type]: value }));
  };

  const [currentItems, setCurrentItems] = useState(products)

  useEffect(() => {
    let productList = products;
    if (filterOptions.category) {
      productList = productList.filter(
        (item) => item.category === filterOptions.category
      );
    }
    if (filterOptions.priceOptions) {
      productList = productList.filter(
        (item) => item.price < filterOptions.priceOptions
      );
    }
    setCurrentItems(productList);
  }, [filterOptions]);

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
        <label className="sort">Sort By Price:</label>
        <select
          onChange={(e) => handleFilterChange("priceOptions", e.target.value)}
        >
          <option value="" selected>
            All Price
          </option>
          {priceOptions.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <label className="category">Category</label>
        <select
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="" selected>
            All categories
          </option>
          {products.map((item) => (
            <option value={item.category}>{item.category}</option>
          ))}
        </select>
       
        </div>
        <div className="products-grid container">
          {
            currentItems.map((item, idx) => <ProductCard product={item} key={idx}/>)
          }
          </div>
    </>
  );
}

export default Shop;
