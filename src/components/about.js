import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bgSmall from "../assets/svg/aboutbgsm.svg"
import bgLg from "../assets/svg/aboutbg.svg"
import styled from "styled-components"
import aboutStyles from "./about.module.scss"

const AboutContainer = styled.div`
  width: 100%;
  background: url(${bgSmall}) no-repeat;
  background-size: 100%;

  @media screen and (min-width: 600px) {
    background: url(${bgLg}) no-repeat;
    background-size: 100%;
  }
`

const About = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <section id="about">
        <h2>about me</h2>
        <Img
          className={aboutStyles.image}
          fluid={data.headshot.childImageSharp.fluid}
        />
        <AboutContainer>
          <div
            className={aboutStyles.aboutText}
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.childMarkdownRemark.html,
            }}
          />
        </AboutContainer>
        />
      </section>
    )}
  />
)

export default About

const pageQuery = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    markdownRemark: file(relativePath: { eq: "aboutme.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
