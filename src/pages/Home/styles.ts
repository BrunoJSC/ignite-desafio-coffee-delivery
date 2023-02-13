import styled from "styled-components";

export const ContainerIntro = styled.div`
  width: 100%;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: relative;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    height: auto;
    font-size: 87.6%;
  }
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  filter: blur(4px);
`;

export const Box = styled.div`
  width: 36.75rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    margin-bottom: 1rem;

    color: ${(props) => props.theme["base-800"]};
  }

  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 1.25rem;

    line-height: 1.625rem;
  }
`;

export const Items = styled.div`
  width: 36rem;
  height: 5.25rem;

  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  div {
    .circle {
      width: 32px;
      height: 32px;
      border-radius: 16px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 12px;
    }
    display: flex;
    align-items: center;
  }
`;

export const CoffeeContainer = styled.div`
  width: 100%;
  height: 102.8125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Menu = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 3rem;

  h2 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
  }

  section {
    display: flex;
    gap: 1rem;

    button {
      width: 6rem;
      height: 1.5625rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 100px;
      border: 1px solid ${(props) => props.theme["yellow-500"]};

      padding: 6px 12px;

      color: ${(props) => props.theme["yellow-300"]};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme["yellow-500"]};
      }
    }
  }
`;

export const ListCoffee = styled.div`
  width: 70rem;
  height: 85rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  align-items: center;
  place-items: center;
`;
