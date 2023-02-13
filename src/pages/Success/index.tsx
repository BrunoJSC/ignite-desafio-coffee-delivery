import { Box, Card, ContainerSuccess } from "./styles";

import sendImage from "../../assets/send.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation, useParams } from "react-router-dom";

interface Props {
  street: string;
}

export function Success() {
  let location = useLocation() as unknown as Props;
  console.log(location.street);
  return (
    <>
      <ContainerSuccess>
        <Box>
          <div>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>
          <Card>
            <div className="info">
              <div>
                <MapPin size={32} />
                <p>
                  Entrega em <strong>{location.street}</strong>  Farrapos -
                  Porto Alegre, RS
                </p>
              </div>

              <div>
                <Timer size={32} />
                <p>
                  Previsão de entrega <strong>20 min - 30 min</strong>{" "}
                </p>
              </div>

              <div>
                <CurrencyDollar size={32} />
                <p>
                  Pagamento na entrega <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </Card>
        </Box>
        <img src={sendImage} alt="send" />
      </ContainerSuccess>
    </>
  );
}
