import logo from "../../assets/logo.svg";
import { ButtonCart, ButtonLocation, HeaderContainer } from "./styles";

import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/CoffeeCartContext";

export function Header() {
  const navigate = useNavigate();
  const { cartItem, cartQuantity } = useShoppingCart();

  const quantity = cartItem.length;
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
      <div className="box">
        <ButtonLocation>
          <MapPin />
          <p>Porto Alegre, RS</p>
        </ButtonLocation>
        <ButtonCart onClick={() => navigate("/checkout")}>
          <ShoppingCart size={18.56} />
          {quantity > 0 && <p>{cartQuantity}</p>}
        </ButtonCart>
      </div>
    </HeaderContainer>
  );
}
