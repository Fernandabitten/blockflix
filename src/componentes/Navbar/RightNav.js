import React from "react";
import { Link } from "react-router-dom";
import latestPurchasesImg from "../../img/latestPurchases2.png";
import CardImg from "../../img/cart.png";
import { MyContext } from "../../context/context";
import { useContext } from "react";
import UserImg from "../../img/user.png";
import { NavItem } from "./Navbar.styled";
import { Ul } from "./Navbar.styled";

const RightNav = ({ open }) => {
  const { cartItems } = useContext(MyContext);
  return (
    <Ul open={open}>
      <li>
        <NavItem>
          <Link to="/last-orders">
            <img src={latestPurchasesImg} alt={""} />
          </Link>
        </NavItem>
      </li>
      <li>
        <NavItem>
          <Link to="/checkout" style={{ display: "flex" }}>
            <img src={CardImg} alt={""} style={{ textDecoration: "none" }} />
            <spam>{cartItems.length}</spam>
          </Link>
        </NavItem>
      </li>
      <li>
        <NavItem>
          <Link to="/login">
            <img src={UserImg} alt={""} />
          </Link>
        </NavItem>
      </li>
    </Ul>
  );
};

export default RightNav;
