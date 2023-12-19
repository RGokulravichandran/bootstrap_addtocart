// Importing necessary styles and scripts
import "./css/styles.css";
import "./js/scripts.js";
import { Link, Route, Routes } from "react-router-dom";

// Importing components
import Checkout from "./components/Checkout.js";
import NavBar from "./components/NavBar.js";
import HeaderComp from "./components/Header.js";
import FooterComp from "./components/Footer.js";
import PageNotFound from "./components/PageNotFound.js";
import BodyComp from "./components/Body.js";

// Importing React's useState hook
import { useState } from "react";

// Sample product data
const ProductData = [
  {
    id: 1,
    name: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00 - $80.00",
    sale: false,
    discountedPrice: null,
    rating: null,
    addedToCart: false,
  },
  {
    id: 2,
    name: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    sale: true,
    discountedPrice: "$18.00",
    rating: 5,
    addedToCart: false,
  },
  {
    id: 3,
    name: "Sale Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    sale: true,
    discountedPrice: "$25.00",
    rating: null,
    addedToCart: false,
  },
  {
    id: 4,
    name: "Popular Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00",
    sale: false,
    discountedPrice: null,
    rating: 5,

    addedToCart: false,
  },
  {
    id: 5,
    name: "Sale Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    sale: true,
    discountedPrice: "$25.00",
    rating: null,
    addedToCart: false,
  },
  {
    id: 6,
    name: "Fancy Product",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$120.00 - $280.00",
    sale: false,
    discountedPrice: null,
    rating: null,
    addedToCart: false,
  },
  {
    id: 7,
    name: "Special Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$18.00",
    sale: true,
    discountedPrice: "$18.00",
    rating: 5,

    addedToCart: false,
  },
  {
    id: 8,
    name: "Sale Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$25.00",
    sale: true,
    discountedPrice: "$25.00",
    rating: null,
    addedToCart: false,
  },
  {
    id: 9,
    name: "Popular Item",
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    price: "$40.00",
    sale: false,
    discountedPrice: null,
    rating: 5,
    addedToCart: false,
  },
];

// Main App component
function App() {
  // State for managing product data
  const [Data, setData] = useState(ProductData);

  // Count of items added to the cart
  const addedToCartCount = Data.filter((data) => data.addedToCart).length;

  // App component structure
  return (
    <div>
      {/* Navigation bar component with addedToCartCount prop */}
      <NavBar addedToCartCount={addedToCartCount} />

      {/* Header component */}
      <HeaderComp />

      {/* React Router Routes for different pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<BodyComp Data={Data} setData={setData} />} />

        {/* Checkout page route */}
        <Route
          path="/checkout"
          element={<Checkout Data={Data} setData={setData} />}
        />

        {/* Page not found route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Footer component */}
      <FooterComp />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
