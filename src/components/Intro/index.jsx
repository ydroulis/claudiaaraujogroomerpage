import React from "react";
import * as S from './styles';

function Intro() {
  return (
    <S.IntroContainer>
      <h1>
        Você está a um passo de mudar sua carreira e garantir sua vaga para se
        tornar um <span className="highlight">tosador fora da curva</span>
      </h1>
      <button className="button">Quero fazer minha matrícula</button>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7pQ34kW-oBE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="welcomeVideo"
      ></iframe>
    </S.IntroContainer>
  )
}

export default Intro
