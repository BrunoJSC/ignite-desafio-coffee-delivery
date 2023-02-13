import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  text-align: center;

  .box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ContainerButtons = styled.div`
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
