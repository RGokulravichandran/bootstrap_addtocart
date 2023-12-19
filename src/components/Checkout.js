import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React from "react";

// Checkout component receives Data and setData as props
const Checkout = ({ Data, setData }) => {
  // Filter products that have been added to the cart
  const cart = Data.filter((product) => product.addedToCart);

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    // Map through the data and update the addedToCart status
    const updatedData = Data.map((product) => {
      if (product.id === productId) {
        return { ...product, addedToCart: false };
      }
      return product;
    });

    // Set the updated data using setData function
    setData(updatedData);
  };
  return (
    <Container className="checkout mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {cart.map((product) => (
            <Col key={product.id} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Checkout;
