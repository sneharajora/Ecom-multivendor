import React, {  useEffect, useState,useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectinPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () =>{
    setIsSidebarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e)=>{
    // Closing of sidebar on clicking outside
      if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSidebarOpen(false);
      }
  };

  useEffect(()=>{
    //Add Event listener for clicks
      document.addEventListener("mousedown",handleClickOutside);
      // clean event Listener
        document.removeEventListener("mousedown",handleClickOutside)
  })

  useEffect(() => {
    setTimeout(() => {
      const fetchedproducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          _id: 2,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          _id: 3,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 4,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
      ];
      setProducts(fetchedproducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button onClick={toggleSidebar} className="lg:hidden border-2 p-2 flex justify-center items-center">
        <FaFilter className="mr-2" />
      </button>

      {/* Filter sidebar */}
      <div ref={sidebarRef} className={`${isSideBarOpen ? "translate-x-0": "translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300lg:static lg:translate-x-0`}>
         <FilterSidebar/>
      </div>
      <div className="flex-graow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>

        {/* Sort options */}
        <SortOptions/>
         {/* Product grid */}
        <ProductGrid products={products}/>
      </div>
    </div>
  );
};

export default CollectinPage;
