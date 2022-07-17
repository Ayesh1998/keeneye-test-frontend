import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CartComponent from "../../components/cart/cart-component";
import { toggleDropdown } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";
import "./nav-bar-styles.css"

//Navbar component
const NavBar = () => {
  const dispatch = useDispatch();
  const toggleDropDownState = useSelector((state) => state.products.toggleDropdown);
  const productsModified = useSelector((state) => state.products.productsModified);

  const [totalAddedToCart, setTotalAddedToCart] = useState(0);

  //getting total number of products added to cart
  useEffect(() => {
    let productsAddedToCart = productsModified.filter((product) => product.noAddedToCart !== 0);
    let total = 0;
    productsAddedToCart.map((product) => { total += product.noAddedToCart; });
    setTotalAddedToCart(total);
  }, [productsModified]);

  return (
    <div style={{}} className="sticky-top">
      <Navbar className="navbar" bg="white" variant="light">
        <Navbar.Brand className="navbar-brand">
          Logo
        </Navbar.Brand>
          <Nav className="justify-content-end" style={{ width: "85%"}}>
            <Nav.Link>
              <FaShoppingCart className="navbar-shopping-cart"
                onClick={() => dispatch(toggleDropdown())}/>
              {toggleDropDownState && <CartComponent />}
              <Badge className="navbar-badge" variant="success" >
                {totalAddedToCart}
              </Badge>
            </Nav.Link>
            <Nav.Link className="checkoutButton" href="">
              <Button className="navbar-checkoutButton" variant="success">
                Checkout
              </Button>
            </Nav.Link>
          </Nav>

      </Navbar>
    </div>
  );
};

export default NavBar;