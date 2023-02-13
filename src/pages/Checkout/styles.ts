import styled from "styled-components";

export const ContainerCheckout = styled.div`
  width: 100%;
  height: 37.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CoffeeCard = styled.div`
  width: 28rem;
  height: 31.125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin-left: auto;
  }

  .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    strong {
      margin-top: 50px;
    }
  }
`;

export const ButtonSend = styled.button`
  width: 23rem;
  height: 2.875rem;
  background-color: ${(props) => props.theme["yellow-300"]};

  border: 0;
  border-radius: 10px;
  cursor: pointer;

  transition: 0.1s;

  font-weight: bold;
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme["yellow-500"]};
  }
`;

export const ContainerForm = styled.div`
  width: 28rem;
  height: 31.125rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    height: 15rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .cep {
      width: 50%;
      height: 42px;
      border-radius: 6px;

      padding: 0 16px;
      border: 1px solid ${(props) => props.theme["base-500"]};
    }

    .street {
      width: 100%;
      height: 42px;
      border-radius: 6px;

      padding: 0 16px;
      border: 1px solid ${(props) => props.theme["base-500"]};
    }

    .number {
      width: 30%;
      height: 42px;
      border-radius: 6px;

      padding: 0 16px;
      border: 1px solid ${(props) => props.theme["base-500"]};

      margin-right: 3rem;
    }

    .complete {
      width: 50%;
      height: 42px;
      border-radius: 6px;

      padding: 0 16px;
      border: 1px solid ${(props) => props.theme["base-500"]};
    }
    .box {
      display: flex;
      justify-content: space-between;
      .neighborhood {
        width: 20%;
        height: 42px;
        border-radius: 6px;

        padding: 0 16px;
        border: 1px solid ${(props) => props.theme["base-500"]};
      }

      .city {
        width: 40%;
        height: 42px;
        border-radius: 6px;

        padding: 0 16px;
        border: 1px solid ${(props) => props.theme["base-500"]};
      }

      .uf {
        width: 30%;
        height: 42px;
        border-radius: 6px;

        padding: 0 16px;
        border: 1px solid ${(props) => props.theme["base-500"]};
      }
    }
  }
`;

export const ContainerPay = styled.div`
  width: 37rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
      width: 30%;
      height: 3.1875rem;
      border-radius: 6px;
      border: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: ${(props) => props.theme["base-700"]};

      cursor: pointer;

      :focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]};
      }
    }
  }

  div {
    .title {
      font-size: 2rem;
      display: flex;
      align-items: center;
    }
    p {
      display: flex;
      font-size: 0.9rem;
    }
  }
`;
