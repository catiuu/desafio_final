import styled from "styled-components";

export const Inicio = styled.main`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  h2,
  p {
    color: white;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    height: 100vh;

    img {
      width: 70vw;
    }

    h2,
    p {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const RedesSociais = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-evenly;

  img {
    width: 3vw;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 80vw;
    justify-content: space-evenly;
    img {
      width: 15vw;
    }
  }
`;
