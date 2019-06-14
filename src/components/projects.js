import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectBtns from "../components/projectButtons"

const Project = ({ title, skills, children, demoHref, codeHref }) => (
  <div>
    <h3>{title}</h3>
    <p>{skills}</p>
    {children}
    <ProjectBtns demoHref={demoHref} codeHref={codeHref} />
  </div>
)

const ProjectContainer = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => (
        <section id="projects">
          <Project
            title="web portfolio"
            skills="node, express, npm"
            demoHref="https://www.google.com"
            codeHref="https://www.yahoo.com"
          >
            <Img fluid={data.portfolio.childImageSharp.fluid} />
          </Project>
          <Project
            title="pizza magic website"
            skills="html, materialize, css"
            demoHref="https://www.google.com"
            codeHref="https://www.yahoo.com"
          >
            <Img fluid={data.pizzaMagic.childImageSharp.fluid} />
          </Project>
          <Project
            title="joanna thorne wellbeing"
            skills="html, flexbox, css"
            demoHref="https://www.google.com"
            codeHref="https://www.yahoo.com"
          >
            <Img fluid={data.wellbeing.childImageSharp.fluid} />
          </Project>
          <Project
            title="javascript office app"
            skills="html, javascript"
            demoHref="https://www.google.com"
            codeHref="https://www.yahoo.com"
          >
            <Img fluid={data.jsAppsuite.childImageSharp.fluid} />
          </Project>
          <Project
            title="perrennial designs"
            skills="node, express, npm, mongodb"
            demoHref="https://www.google.com"
            codeHref="https://www.yahoo.com"
          >
            <Img fluid={data.perrennial.childImageSharp.fluid} />
          </Project>
          <Project
            title="chasing the rain"
            skills="gatsby js"
            demoHref="https://www.google.com"
            codeHref="https://www.yahoo.com"
          >
            <Img fluid={data.chasingRain.childImageSharp.fluid} />
          </Project>
        </section>
      )}
    />
  )
}

export default ProjectContainer

export const imageQueryFragment = graphql`
  fragment imageQueryFragment on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const pageQuery = graphql`
  query {
    portfolio: file(relativePath: { eq: "projects/portfolio.png" }) {
      ...imageQueryFragment
    }
    pizzaMagic: file(relativePath: { eq: "projects/pizza-magic.png" }) {
      ...imageQueryFragment
    }
    wellbeing: file(relativePath: { eq: "projects/wellbeing.png" }) {
      ...imageQueryFragment
    }
    jsAppsuite: file(relativePath: { eq: "projects/js-appsuite.png" }) {
      ...imageQueryFragment
    }
    perrennial: file(relativePath: { eq: "projects/perrennial.png" }) {
      ...imageQueryFragment
    }
    chasingRain: file(relativePath: { eq: "projects/chasing-the-rain.png" }) {
      ...imageQueryFragment
    }
  }
`
