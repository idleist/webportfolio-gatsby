import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import ProjectContainer from "../components/projects"
import About from "../components/about"
import "../styles/base.scss"

export default () => (
  <Layout>
    <div className="container">
      <Skills />
      <ProjectContainer />
      <About />
    </div>
  </Layout>
)
