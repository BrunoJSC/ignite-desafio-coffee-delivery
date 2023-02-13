import { useContext } from "react";
import { useShoppingCart } from "../../context/CoffeeCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { ContainerButtons, ItemContainer } from "./styles";

interface ItemProps {
  id: number;
  name: string;
  info: string;
  image: string;
  price: number;
}

export function Item({ id, name, info, image, price }: ItemProps) {
  const { incrementQuantity, decrementQuantity, getItemQuantity } =
    useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <ItemContainer>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      <p>{info}</p>
      <div className="box">
        <strong>{formatCurrency(price)}</strong>
        <ContainerButtons>
          <button onClick={() => decrementQuantity(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => incrementQuantity(id)}>+</button>
        </ContainerButtons>
      </div>
    </ItemContainer>
  );
}
