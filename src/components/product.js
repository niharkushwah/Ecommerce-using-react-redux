import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch(addToCart(product));
  };
  const { product } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const cards = product.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }} key={product.id}>
      <Card style={{ width: "18rem" }} key={product.id} className="h-100">
        <Card.Img
          variant="top"
          src={product.image}
          style={{ width: "100px", height: "130px", margin: "auto" }}
          alt={product.title}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description.split(" ").slice(0, 15).join(" ")}
          </Card.Text>
          <Card.Footer className="bg-white">
            <Button variant="primary" onClick={() => addCart(product)}>
              Add To Cart
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <div>
        <h1>Product</h1>
        <div className="row">{cards}</div>
      </div>
    </>
  );
};

export default Product;
