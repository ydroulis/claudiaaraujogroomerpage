import * as React from "react"
import Header from "../components/Header";
import Main from "../components/Main";
import RootLayout from "../components/RootLayout";
import "../global-styles.css";

const IndexPage = () => {
  return(
    <RootLayout>
      <Header/>
      <Main/>
    </RootLayout>
  )
}

export default IndexPage
