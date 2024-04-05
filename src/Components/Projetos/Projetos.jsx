import React from "react";
import * as S from "./Style.jsx";
import Vnw from "../../assets/vnw.svg";
import Css from "../../assets/css3.svg";
import Js from "../../assets/js.svg";
import Html from "../../assets/html.svg";

function Projetos() {
  return (
    <>
      <S.Projetos>
        <S.Projeto>
          <h2>Projeto 1</h2>
          <div>
            <h3>Estudo de HTML e CSS</h3>
          </div>
        </S.Projeto>

        <S.Projeto>
          <h2>Projeto 2</h2>

          <div>
            <h3>Prática de React</h3>
          </div>
        </S.Projeto>

        <S.Projeto>
          <h2>Projeto 3</h2>

          <div>
            <h3>Prática de React</h3>
          </div>
        </S.Projeto>

        <S.Projeto>
          <h2>Projeto 4</h2>

          <div>
            <h3>Prática de React</h3>
          </div>
        </S.Projeto>
      </S.Projetos>
    </>
  );
}

export default Projetos;
