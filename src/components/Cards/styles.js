import styled from "styled-components"

export const CardsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

export const Card = styled.div`
  border: #ac3335 solid 4px;
  padding: 20px;
  width: 80%;
  max-width: 305px;
  height: 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    color: #ac3335;
    font-size: 40px;
  }

  p {
    margin-top: 20px;
    text-align: center;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
  }
`
