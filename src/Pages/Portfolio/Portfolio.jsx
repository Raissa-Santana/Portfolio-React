import React from 'react';
import * as S from "./styled";
import Carousel from "react-elastic-carousel";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import Cards from "./Cards";

export default function Portfolio() {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <S.Section id="Portfolio">
      <h1>Meu Portfólio</h1>
      <Carousel breakPoints={breakPoints}>
        <a href="https://github.com/Raissa-Santana/raissa-desafio3-react.git" target="_blank"><Cards imagem={card1} /></a>
        <a href="https://raissa-santana.github.io/meusite/" target="_blank"><Cards imagem={card2} /></a>
        <a href="https://raissa-santana.github.io/site/" target="_blank"><Cards imagem={card3} /></a>
        <a href="" target="_blank"><Cards imagem={card4} /></a>
        <a href="https://github.com/Raissa-Santana/raissa-desafio3-react.git" target="_blank"><Cards imagem={card1} /></a>
        <a href="https://raissa-santana.github.io/meusite/" target="_blank"><Cards imagem={card2} /></a>
        <a href="https://raissa-santana.github.io/site/" target="_blank"><Cards imagem={card3} /></a>
        <a href="" target="_blank"><Cards imagem={card4} /></a>
      </Carousel>
    </S.Section>
  );
}
