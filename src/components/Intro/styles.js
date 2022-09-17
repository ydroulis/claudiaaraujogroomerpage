import styled from "styled-components"

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 5px 10px;
    color: #000;
    font-size: 26px;
    text-align: center;

    font-family: permanent-marker, sans-serif;

    font-weight: 400;

    font-style: normal;
  }

  .highlight {
    color: #f58634;
    top: 0px;
    margin: 0px;
  }

  .button{
    width: 100%;
    height: 60px;
    background-color: #ac3335;
    color: #fff;
    /* position: relative; */
    margin-top: 15px;

    border: none;
    border-radius: 20px;

    font-family: 'Roboto', 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
  }

  .welcomeVideo{
    width: 80%;
    height: auto;
    margin-top: 20px;
  }
`
