import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/projectnav"
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
