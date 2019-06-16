import React from "react"
import Layout from "../components/layout"
import Skills from "../components/skills"
import ProjectContainer from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import "../styles/base.scss"

export default () => (
  <Layout>
    <div className="container">
      <Skills />
      <ProjectContainer />
      <About />
      <Contact />
    </div>
  </Layout>
)
