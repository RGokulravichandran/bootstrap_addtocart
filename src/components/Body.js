import React, { useState } from "react";
import "../css/styles.css";

// BodyComp component receives 'Data' and 'setData' props
function BodyComp({ Data, setData }) {
  // Function to handle adding a product to the cart
  const HandleAddToCart = (cartProducts) => {
    // Updating the cart in the 'Data' state
    const updateCart = Data.map((products) => {
      if (products.id === cartProducts.id) {
        return { ...products, addedToCart: true };
      }
      return products;
    });
    // Setting the updated cart to 'Data' state using 'setData' function
    setData(updateCart);
  };

  // BodyComp component structure
  return (
    <section className="py-10">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* Mapping through the 'Data' array to render products */}
          {Data.map((product) => (
            <div key={product.id} className="col mb-5">
              <div className="card h-100">
                {/* Sale badge (conditional rendering) */}
                {product.sale && (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                )}

                {/* Product image */}
                <img className="card-img-top" src={product.image} alt="..." />

                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{product.name}</h5>

                    {/* Product reviews (if available) */}
                    {product.rating && (
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {[...Array(product.rating).keys()].map((i) => (
                          <div key={i} className="bi-star-fill"></div>
                        ))}
                      </div>
                    )}

                    {/* Product prices (conditional rendering) */}
                    {product.discountedPrice ? (
                      <div>
                        <span className="text-muted text-decoration-line-through">
                          {product.price}
                        </span>
                        {" " + product.discountedPrice}
                      </div>
                    ) : (
                      product.price
                    )}
                  </div>
                </div>

                {/* Product actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {/* Add to cart button with onClick handler */}
                    <a
                      className="btn btn-outline-dark mt-auto "
                      href="#"
                      disabled={product.addedToCart}
                      onClick={() => {
                        HandleAddToCart(product);
                      }}
                    >
                      {/* Button text based on whether the product is added to the cart */}
                      {product.addedToCart ? "Added to Cart" : "Add to cart"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Exporting the BodyComp component as the default export
export default BodyComp;
