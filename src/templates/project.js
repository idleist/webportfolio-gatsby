import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import logo from "../assets/svg/logo.svg"
import ProjectBtns from "../components/projectButtons"
import projectStyles from "./project.module.scss"
import Footer from "../components/footer"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        demo
        code
      }
      html
    }
  }
`

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

const Project = ({ data }) => (
  <React.Fragment>
    <Nav />
    <div className={projectStyles.container}>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <div className={projectStyles.btns}>
        <ProjectBtns
          demoHref={data.markdownRemark.frontmatter.demo}
          codeHref={data.markdownRemark.frontmatter.code}
        />
      </div>
      <div
        className={projectStyles.info}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></div>
    </div>
    <Footer />
  </React.Fragment>
)

export default Project
