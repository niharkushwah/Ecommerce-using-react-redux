import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);
  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-4" style={{ marginBottom: "10px" }} key={product.id}>
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
            <Button variant="danger" onClick={()=> removeToCart(product.id)} >Remove</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <>
      <div>
        <h1>Cart</h1>
        {/* {JSON.stringify(products)}; */}
        <div className="row">{cards}</div>
      </div>
    </>
  );
};

export default Cart;
