import React from "react"
import { Helmet } from "react-helmet"
// import CssBaseline from "@material-ui/core/CssBaseline";

export default function RootLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="https://use.typekit.net/pcu4kfv.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  )
}
