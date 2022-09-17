import styled from "styled-components"

export const ContentContainer = styled.section`
  margin-top: 40px;

  h1 {
    margin: 5px 10px;
    color: #000;
    font-size: 22px;
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

  ul {
    list-style: none;
    margin-top: 35px;
    padding-left: 25px;
  }

  ul li {
    display: flex;
    margin-bottom: 20px;
  }

  ul .icon {
    color: #f58634;
    font-size: 25px;
    margin-right: 8px;
  }

  ul .content {
    width: 80%;
  }

  ul li .title {
    font-family: permanent-marker, sans-serif;
    font-size: 20px;
    color: #000;
  }

  ul li .subtitle {
    font-family: permanent-marker, sans-serif;
    font-size: 20px;
    color: #f58634;
    margin-top: 5px;
  }

  ul li p {
    text-align: left;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    margin-top: 4px;
  }
`
