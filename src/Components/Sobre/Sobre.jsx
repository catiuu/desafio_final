import React from "react";
import * as S from "./Style.jsx";
import Vnw from "../../assets/vnw.svg";
import Cubos from "../../assets/cubos.png";
import Css from "../../assets/css3.svg";
import Js from "../../assets/js.svg";
import Html from "../../assets/html.svg";

function Sobre() {
  return (
    <S.Sobre>
      <S.Estudos>
        <h2>Estudos</h2>
        <div>
          <h3>Desenvolvimento front-end</h3>
          <h3>Ago/2023 - Maio/2024</h3>
        </div>
        <img src={Vnw} alt="" />
        <div>
          <h3>Desenvolvimento Full Stack</h3>
          <h3>Jun/2021 - Dez/2021</h3>
        </div>
        {/* <img src={Cubos} alt="" /> */}
      </S.Estudos>

      <S.Habilidades>
        <h2>Habilidades</h2>

        <div>
          <img src={Css} alt="" />
          <h3>CSS</h3>
        </div>

        <div>
          <img src={Js} alt="" />
          <h3>JS</h3>
        </div>

        <div>
          <img src={Html} alt="" />
          <h3>HTML</h3>
        </div>
      </S.Habilidades>
    </S.Sobre>
  );
}

export default Sobre;
