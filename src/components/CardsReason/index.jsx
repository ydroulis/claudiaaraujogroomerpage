import React from "react"
import * as S from "./styles"

import Cards from "../Cards";

function CardsReason() {
  return (
    <S.ReasonsContainer>
      <h1>
        <span className="highlight">5 motivos </span>para você fazer o curso
        tosadores em domicílio
      </h1>
      <Cards/>
    </S.ReasonsContainer>
  )
}

export default CardsReason
