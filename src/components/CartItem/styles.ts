import styled from "styled-components";

export const ContainerCartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  img {
    width: 50px;
    height: 50px;
  }
  p {
    margin-bottom: 1rem;
  }

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .box {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const ContainerButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 4.5rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme["base-300"]};
  border: 0;
  border-radius: 6px;

  button {
    border: 0;
    background: none;
    cursor: pointer;
    color: ${(props) => props.theme["purple-500"]};
    font-size: 1rem;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 0;
  background: none;
  cursor: pointer;
  background-color: ${(props) => props.theme["base-300"]};
  color: ${(props) => props.theme["purple-500"]};
  font-size: 1rem;

  padding: 0.5rem;
  border-radius: 6px;
`;
