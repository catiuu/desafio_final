import React from "react";
import Perfil from "../../assets/perfil.png";
import Instagram from "../../assets/insta.svg";
import Facebook from "../../assets/face.svg";
import Linkedin from "../../assets/linkedin.svg";
import * as S from "./Style.jsx";

function Inicio() {
  return (
    <S.Inicio>
      <img src={Perfil} alt="minha foto" />

      <h2>Catiussia Nascimento</h2>
      <p>Desenvolvedora Full Stack</p>

      <S.RedesSociais>
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
        <img src={Linkedin} alt="" />
      </S.RedesSociais>
    </S.Inicio>
  );
}

export default Inicio;
