import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { FaSistrix } from "react-icons/fa"
import Img from "gatsby-image"
import ProjectBtns from "../components/projectButtons"
import projectStyles from "./projects.module.scss"

const Project = ({
  title,
  skills,
  children,
  projectHref,
  demoHref,
  codeHref,
}) => (
  <div className={projectStyles.project}>
    <div className={projectStyles.titleText}>
      <h3 className={projectStyles.title}>{title}</h3>
      <p className={projectStyles.skills}>{skills}</p>
    </div>
    <Link className={projectStyles.link} to={`/project/${projectHref}`}>
      <div className={projectStyles.overlay}>
        <p className={projectStyles.overlayText}>view project</p>
        <FaSistrix className={projectStyles.searchIcon} />
      </div>
      {children}
    </Link>
    <ProjectBtns demoHref={demoHref} codeHref={codeHref} />
  </div>
)

const ProjectContainer = () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => (
        <section id="projects">
          <h2>portfolio</h2>
          <div className={projectStyles.container}>
            <Project
              title="web portfolio"
              skills="gatsby js, graphql, node, express, npm"
              demoHref="https://www.idleistdesign.co.uk/"
              codeHref="https://github.com/idleist/webportfolio-gatsby"
              projectHref="portfolio"
            >
              <Img
                className={projectStyles.image}
                alt="web portfolio"
                fluid={data.portfolio.childImageSharp.fluid}
              />
            </Project>
            <Project
              title="pizza magic website"
              skills="html, materialize, css"
              demoHref="http://pizzamagic-com.stackstaging.com/"
              codeHref="https://github.com/idleist/pizza-magic"
              projectHref="pizzamagic"
            >
              <Img
                className={projectStyles.image}
                alt="pizza magic website"
                fluid={data.pizzaMagic.childImageSharp.fluid}
              />
            </Project>
            <Project
              title="joanna thorne wellbeing"
              skills="html, flexbox, css"
              demoHref="https://joannathornewellbeing.co.uk/"
              codeHref="https://github.com/idleist/joannathornewellbeing"
              projectHref="wellbeing"
            >
              <Img
                className={projectStyles.image}
                alt="joanna thorne wellbeing"
                fluid={data.wellbeing.childImageSharp.fluid}
              />
            </Project>
            <Project
              title="javascript office app"
              skills="html, javascript"
              demoHref="http://office-app-com.stackstaging.com/"
              codeHref="https://github.com/idleist/JavaScript-Office-App-Suite"
              projectHref="officeapp"
            >
              <Img
                className={projectStyles.image}
                alt="javascript office app"
                fluid={data.jsAppsuite.childImageSharp.fluid}
              />
            </Project>
            <Project
              title="perrennial designs"
              skills="node, express, npm, mongodb"
              demoHref="https://radiant-reaches-88720.herokuapp.com/"
              codeHref="https://github.com/idleist/perrennialdesigns"
              projectHref="perrennialdesigns"
            >
              <Img
                className={projectStyles.image}
                alt="perrennial designs"
                fluid={data.perrennial.childImageSharp.fluid}
              />
            </Project>
            <Project
              title="chasing the rain"
              skills="gatsby js, graphql"
              demoHref="https://chasingtherain.co.uk/"
              codeHref="https://github.com/idleist/Chasing-The-Rain-React-GatsbyJs"
              projectHref="chasingtherain"
            >
              <Img
                className={projectStyles.image}
                alt="chasing the rain"
                fluid={data.chasingRain.childImageSharp.fluid}
              />
            </Project>
          </div>
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
