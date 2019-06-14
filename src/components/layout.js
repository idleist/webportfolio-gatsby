import React from "react"
import MainNav from "./mainnav"
import Header from "./header"
import Footer from "./footer"
import "../styles/base.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <MainNav />
    <Header />
    {children}
    <Footer />
  </React.Fragment>
)

export default Layout
