import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./grid-single-item-styles.css";
import { addToCart } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";

//GridSingleItem component for a single item in grid
const GridSingleItem = ({ name, image, price, item, stock, material, createdAt, noAddedToCart }) => {
  const dispatch = useDispatch();
  const [productsAddedToCart, setProductsAddedToCart] = useState([]);
  const productsModified = useSelector((state) => state.products.productsModified);
  const [show, setShow] = useState(false);

  //handle closing the modal
  const handleClose = () => setShow(false);

  //filtering products added to cart and setting them
  useEffect(() => {
    let productsAddedToCartFiltered = productsModified.filter(
      (product) => product.noAddedToCart !== 0
    );
    setProductsAddedToCart(productsAddedToCartFiltered);
  }, [productsModified]);

  //handle showing the modal when more than five product types added to cart
  const handleAddToCart = (itemAdding) => {
    if (productsAddedToCart.length >= 5) {
      setShow(true);
    } else {
      dispatch(addToCart(itemAdding));
    }
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6" style={{ marginTop: "20px" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger text-center" style={{ width: "100%" }}>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cannot add more that five robot types to the cart.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="item-card">
        <Card.Img className="item-card-image" variant="top" src={image} />
        <Card.Body>
          <Card.Title className="item-name">
            {name} ({material})
          </Card.Title>
          <div className="row">
            <div className="col-12 item-price">
              LKR {price}
            </div>
          </div>
          <div className="row" style={{ marginTop: "10px" }}>
            {noAddedToCart !== stock ? (
              <div onClick={() => handleAddToCart(item)}
                   className="col-lg-12 col-md-12 col-sm-12 item-add-to-cart-button">
                Add to cart
              </div>
            ) : (
              <div className="col-lg-12 col-md-12 col-sm-12 item-out-of-stock-button">
                Out of Stock
              </div>
            )}
          </div>
          <div className="row pt-3">
            <div className="col-lg-4 col-md-4 col-sm-12 item-remain-date" data-testid="remaining" style={{textAlign: "left",}}>
              Remain : {stock - noAddedToCart}
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 item-remain-date" style={{textAlign: "right",}}>
              Added : {createdAt}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GridSingleItem;
