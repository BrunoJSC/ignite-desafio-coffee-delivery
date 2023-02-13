import { Trash } from "phosphor-react";
import { useShoppingCart } from "../../context/CoffeeCartContext";
import storeItem from "../../data/data.json";
import { formatCurrency } from "../../utils/formatCurrency";

import { ButtonRemove, ContainerButtons, ContainerCartItem } from "./styles";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const item = storeItem.find((i) => i.id === id);
  const { incrementQuantity, decrementQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <ContainerCartItem>
      <img src={item?.image} alt={item?.name} />
      <div>
        <p>{item?.name}</p>

        <div className="box">
          <ContainerButtons>
            <button onClick={() => decrementQuantity(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => incrementQuantity(id)}>+</button>
          </ContainerButtons>
          <ButtonRemove onClick={() => removeFromCart(id)}>
            <Trash />
            Remover
          </ButtonRemove>
        </div>
      </div>
      <h3>{formatCurrency(item?.price * quantity)}</h3>
    </ContainerCartItem>
  );
}
