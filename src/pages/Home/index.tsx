import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import {
  Blur,
  Box,
  CoffeeContainer,
  ContainerIntro,
  Items,
  ListCoffee,
  Menu,
} from "./styles";

import data from "../../data/data.json";

import coffeeImage from "../../assets/coffee.svg";
import { Item } from "../../components/Item";

export function Home() {
  return (
    <>
      <ContainerIntro>
        <Blur />

        <Box>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Items>
            <div>
              <div className="circle" style={{ backgroundColor: "#C47F17" }}>
                <ShoppingCart size={20} color="#fff" />
              </div>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <div className="circle" style={{ backgroundColor: "#574F4D" }}>
                <Package size={20} color="#fff" />
              </div>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <div className="circle" style={{ backgroundColor: "#DBAC2C" }}>
                <Timer size={20} color="#fff" />
              </div>
              <p>Compra simples e segura</p>
            </div>

            <div>
              <div className="circle" style={{ backgroundColor: "#8047F8" }}>
                <Coffee size={20} color="#fff" />
              </div>
              <p>Compra simples e segura</p>
            </div>
          </Items>
        </Box>
        <img src={coffeeImage} alt="Café" />
      </ContainerIntro>

      <CoffeeContainer>
        <Menu>
          <h2>Nossos cafés</h2>
          <section>
            <button>tradicional</button>
            <button>especial</button>
            <button>com leite</button>
            <button>alcoólico</button>
            <button>gelado</button>
          </section>
        </Menu>

        <ListCoffee>
          {data.map((product) => (
            <Item key={product.id} {...product} />
          ))}
        </ListCoffee>
      </CoffeeContainer>
    </>
  );
}
