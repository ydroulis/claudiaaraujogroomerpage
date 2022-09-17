import React from "react"
import * as S from "./styles"

import { MdWorkOutline } from "react-icons/md"
import { CgCalculator } from "react-icons/cg"
import { RiScissors2Line } from "react-icons/ri"
import { TbCalendarStats } from "react-icons/tb"
import { MdOutlineHomeWork } from "react-icons/md"

function Cards() {
  return (
    <S.CardsContainer>
      <S.Card>
        <MdWorkOutline className="icon" />
        <p>
          Veja como se profissionalizar no banho e tosa em domícilio se tornando
          uma empresa de verdade
        </p>
      </S.Card>
      <S.Card>
        <CgCalculator className="icon" />
        <p>Aprenda a calcular os seus custos e a cobrar corretamente</p>
      </S.Card>
      <S.Card>
        <RiScissors2Line className="icon" />
        <p>Descubra todo o equipamento necessário para o seu negócio</p>
      </S.Card>
      <S.Card>
        <TbCalendarStats className="icon" />
        <p>
          Mantenha uma boa qualidade de vida aprendendo a montar sua agenda, a
          medida que for conquistando novos clientes
        </p>
      </S.Card>
      <S.Card>
        <MdOutlineHomeWork className="icon" />
        <p>Saiba como migrar do emprego fixo para o banho e tosa em domicílio</p>
      </S.Card>
    </S.CardsContainer>
  )
}

export default Cards
