import styled from "styled-components";

export const Navegacao = styled.nav`
  background-color: #ffffff;
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  list-style: none;

  a {
    text-decoration: none;
    color: black;
    font-size: 2rem;
  }

  a:hover {
    color: gray;
    font-weight: 800;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
    a:hover {
      font-size: 2.5rem;
      color: purple;
    }
  }
`;
