import React from "react"
import headerStyles from "./header.module.scss"
import codepen from "../assets/svg/codepenlogo.svg"
import github from "../assets/svg/githublogo.svg"
import linkedin from "../assets/svg/linkedinlogo.svg"

import cv from "../assets/cv.pdf"

import heroSm from "../assets/images/hero-image-small.png"
import heroMd from "../assets/images/hero-image-md.png"
import heroLg from "../assets/images/hero-image-lg.png"

import styled from "styled-components"

const HeaderContainer = styled.header`
  height: 100vh;
  background-image: url(${heroSm});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100vh;

  @media screen and (min-width: 600px) {
    background-image: url(${heroMd});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100vh;
  }

  @media screen and (min-width: 900px) {
    background-image: url(${heroLg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100vh;
  }
`

const Hero = () => {
  return (
    <HeaderContainer>
      <div className={headerStyles.hero}>
        <div className={headerStyles.container}>
          <h2 className={headerStyles.title}>Ben Rugman</h2>
          <h4 className={headerStyles.sub}>Web Developer | Web Design</h4>
          <div className={headerStyles.links}>
            <a
              href="https://www.linkedin.com/in/ben-rugman-94b639185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linked in" />
            </a>
            <a
              href="https://www.github.com/idleist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://codepen.io/Idleist/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={codepen} alt="code pen" />
            </a>
          </div>
          <a className={headerStyles.cvBtn} href={cv} download="benrugmanCV">
            Download CV
          </a>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Hero
