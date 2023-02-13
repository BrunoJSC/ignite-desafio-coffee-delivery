import styled from "styled-components";

export const ContainerSuccess = styled.div`
  width: 100%;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Box = styled.div`
  width: 32.875rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    color: ${(props) => props.theme["yellow-500"]};
    font-family: "Baloo 2";
  }
`;

export const Card = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  border-radius: 0px 99px 0px 74px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;

  border: 1px solid transparent;

  background-color: green;
  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      width: 60%;
      display: flex;
      align-items: center;
      gap: 1rem;

      padding: 1rem;

      text-align: center;

      height: 4rem;

      .circle {
        width: 24px;
        height: 24px;

        border-radius: 12px;
        padding: 2px;
      }

      p {
        width: 100%;
        font-size: 0.8rem;
        text-align: left;
      }
    }
  }
`;
