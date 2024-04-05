import styled from "styled-components";

export const Sobre = styled.main`
  display: flex;
  justify-content: space-evenly;
`;

export const Estudos = styled.section`
  border: solid;
  border-radius: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
  width: 30vw;
`;

export const Habilidades = styled.section`
  border: solid;
  border-radius: 8%;
  height: 50vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 7vh;
  }
`;
