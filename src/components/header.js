import { Link } from "gatsby"
import React from "react"
import codepen from "../assets/svg/codepenlogo.svg"
import github from "../assets/svg/githublogo.svg"
import linkedin from "../assets/svg/linkedinlogo.svg"
import headerStyles from "./header.module.scss"

const Hero = () => {
  return (
    <header>
      <div className={headerStyles.hero}>
        <div className={headerStyles.container}>
          <h2 className={headerStyles.title}>Ben Rugman</h2>
          <h4 className={headerStyles.sub}>Web Developer | Web Design</h4>
          <div className={headerStyles.links}>
            <a
              href="https://www.linkedin.com/in/ben-rugman-94b639185/"
              target="_blank"
            >
              <img src={linkedin} alt="linked in" />
            </a>
            <a href="https://www.github.com/idleist" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href="https://codepen.io/Idleist/" target="_blank">
              <img src={codepen} alt="code pen" />
            </a>
          </div>
          <a
            className={headerStyles.cvBtn}
            href="/assets/cv.pdf"
            download="benrugmanCV"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero
