import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../assets/svg/logo.svg"

const ProjectNav = styled.nav`
  width: 100%;
  padding: 0 1.5em;
  height: 60px;
  background-color: #363732;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 90%;
  }

  a {
    transition: all 300ms ease-in;
    text-transform: uppercase;

    &:hover {
      color: #168d8d;
    }
  }
`

const Nav = () => (
  <ProjectNav>
    <img className="logo" src={logo} alt="br logo" />
    <Link to="/">back to main site</Link>
  </ProjectNav>
)

export default Nav
