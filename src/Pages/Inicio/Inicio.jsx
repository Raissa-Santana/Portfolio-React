import { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png"
import AutoTypingHeader from "../../components/Estado/AutoTypingHeader"
import * as S from "./styled"

export default function Sobre() {

    const phrase = 'Olá, esse é o meu portfólio!';
    const typingSpeed = 80; // Velocidade de digitação em milissegundos
    const deletingSpeed = 80; // Velocidade de deleção em milissegundos



  return (
    <>
    <S.Section id="Inicio">
        <div className="texto-animado">
            {/* Usar o componente AutoTypingHeader */}
            <h1><AutoTypingHeader
              phrase={phrase}
              typingSpeed={typingSpeed}
              deletingSpeed={deletingSpeed}
            /> </h1>
            <p>É um prazer apresentar meu portfólio como 
            desenvolvedora front-End com conhecimento em 
            HTML, CSS, JavaScript, React.js e Styled-Components.
            Sou uma apaixonada por tecnologia e design. 
            Desde o início da minha transição de carreira, 
            tenho me dedicado a aprimorar minhas habilidades 
            como desenvolvedor front-end.</p>
        </div>

        <div className="img">
            <img src={avatar} alt="" />
        </div>
    </S.Section>
    </>
  )
}
