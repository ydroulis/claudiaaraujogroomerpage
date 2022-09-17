import React from "react"
import * as S from "./styles"
import Img from "../../images/cabecalho.svg"
import LogoImageComponent from "../LogoImageComponent"

const Header = () => {
  return (
    <S.Container>
      <img src={Img} className="decoration" />
      <LogoImageComponent />
    </S.Container>
  )
}

export default Header
