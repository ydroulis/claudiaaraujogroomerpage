import React from "react"
import * as S from "./styles"

import { SiFurrynetwork } from "react-icons/si"

function CourseContent() {
  return (
    <S.ContentContainer>
      <h1>
        <span className="highlight">O que</span> você verá no curso Tosadores em
        Domicílio?
      </h1>

      <ul>
        <li>
          <SiFurrynetwork className="icon" />
          <div className="content">
            <h2 className="title">Módulo 1</h2>
            <h2 className="subtitle">Orientações</h2>
            <p>Nesse módulo irei passar algumas orientações</p>
          </div>
        </li>
        <li>
          <SiFurrynetwork className="icon" />
          <div className="content">
            <h2 className="title">Módulo 2</h2>
            <h2 className="subtitle">Equipamento</h2>
            <p>Aqui veremos todo o material necessário para o seu dia-a-dia</p>
          </div>
        </li>
        <li>
          <SiFurrynetwork className="icon" />
          <div className="content">
            <h2 className="title">Módulo 3</h2>
            <h2 className="subtitle">Noções de ADM e MKT</h2>
            <p>
              Veremos também como cuidar da parte administrativa e do marketing
              do seu negócio
            </p>
          </div>
        </li>
        <li>
          <SiFurrynetwork className="icon" />
          <div className="content">
            <h2 className="title">Módulo 4</h2>
            <h2 className="subtitle">Aulas práticas</h2>
            <p>
              Essa será a melhor parte onde vocês verão em ação um atendimento
              real de banho e tosa em domícilio
            </p>
          </div>
        </li>
        <li>
          <SiFurrynetwork className="icon" />
          <div className="content">
            <h2 className="title">Módulo 5</h2>
            <h2 className="subtitle">Módulo bônus</h2>
            <p>
              Um conteúdo bônus com dicas surpresas para profissionalizar você
              ainda mais em seus atendimentos a domicílio
            </p>
          </div>
        </li>
      </ul>
    </S.ContentContainer>
  )
}

export default CourseContent
