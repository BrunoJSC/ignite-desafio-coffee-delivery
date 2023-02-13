import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 6px;

  .box {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ButtonLocation = styled.button`
  width: 8.9375rem;
  height: 2rem;
  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 0;

  cursor: pointer;

  background-color: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-500"]};

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-500"]};
  }
`;

export const ButtonCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  position: relative;
  border: 0;
  border-radius: 8px;
  padding: 8px;
  color: ${(props) => props.theme["yellow-500"]};

  cursor: pointer;
  background-color: ${(props) => props.theme["yellow-100"]};
  p {
    position: absolute;
    top: -10px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme.white};
    border-radius: 10px;
  }
  &:hover {
    background-color: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme.white};
  }
`;
