import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/CartItem";
import { useShoppingCart } from "../../context/CoffeeCartContext";
import storeItems from "../../data/data.json";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  ButtonSend,
  CoffeeCard,
  ContainerCheckout,
  ContainerForm,
  ContainerPay,
} from "./styles";

interface FormProps {
  cep: number;
  street: string;
  number: number;
  complete: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export function Checkout() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<FormProps>();
  const { cartItem, getItemQuantity, cartQuantity, removeFromCart } =
    useShoppingCart();

  function handleClick(data: FormProps) {
    console.log("Enviou");
    console.log(data);
    navigate("/success");

    cartItem.length = 0;
    removeFromCart(cartQuantity);
  }

  return (
    <>
      <h3>Complete seu pedido</h3>
      <ContainerCheckout>
        <ContainerForm>
          <form id="send" onSubmit={handleSubmit(handleClick)}>
            <div>
              <input placeholder="cep" className="cep" {...register("cep")} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                className="street"
                {...register("street")}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Número"
                className="number"
                {...register("number")}
              />
              <input
                type="text"
                placeholder="Complemento"
                className="complete"
                {...register("complete")}
              />
            </div>
            <div className="box">
              <input
                type="text"
                placeholder="Bairro"
                className="neighborhood"
                {...register("neighborhood")}
              />
              <input
                type="text"
                placeholder="Cidade"
                className="city"
                {...register("city")}
              />
              <input placeholder="UF" className="uf" {...register("uf")} />
            </div>
          </form>
          <ContainerPay>
            <div>
              <p className="title">
                <CurrencyDollar color="#8047F8" />
                Pagamento
              </p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <div className="buttons">
              <button>
                <CreditCard color="#8047F8" />
                Cartão de crédito
              </button>
              <button>
                <Bank color="#8047F8" />
                cartão de débito
              </button>
              <button>
                <Money color="#8047F8" />
                dinheiro
              </button>
            </div>
          </ContainerPay>
        </ContainerForm>

        {cartItem.length > 0 ? (
          <CoffeeCard>
            {cartItem.map((item) => (
              <CartItem id={item.id} quantity={getItemQuantity(item.id)} />
            ))}

            <div className="box">
              <strong>Total de items</strong>
              <h4>
                {formatCurrency(
                  cartItem.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </h4>
            </div>
            <ButtonSend type="submit" form="send" onClick={handleClick}>
              Confirmar perdido
            </ButtonSend>
          </CoffeeCard>
        ) : (
          <h2>Sem items ainda</h2>
        )}
      </ContainerCheckout>
    </>
  );
}
