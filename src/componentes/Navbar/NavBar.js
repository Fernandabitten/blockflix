import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Nav, NavItem, NavItemRight, NavItemLeft } from "./Navbar.styled";
import Burger from "./Burger";

export default function Navbar() {
  return (
    <Nav>
      <NavItemLeft>
        <NavItem>
          <Link to="/list-movies">
            <img src={logo} alt={"logo blockflix"} />
          </Link>
        </NavItem>
      </NavItemLeft>
      
      <NavItemRight>
        <Burger />
      </NavItemRight>
    </Nav>
  );
}
