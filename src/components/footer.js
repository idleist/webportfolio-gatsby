import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import codepen from "../assets/svg/codepenlogo.svg"
import github from "../assets/svg/githublogo.svg"
import linkedin from "../assets/svg/linkedinlogo.svg"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.contact}>
        <div className={footerStyles.details}>
          <p className={footerStyles.media}>Email</p>
          <p className={footerStyles.info}>benrugman@yahoo.co.uk</p>
          <p className={footerStyles.media}>Phone</p>
          <p className={footerStyles.info}>07854 327439</p>
        </div>
        <div className={footerStyles.links}>
          <div className={footerStyles.linksSocial}>
            <a href="#">
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
            className={footerStyles.cvBtn}
            href="/assets/cv.pdf"
            download="benrugmanCV"
          >
            my cv
          </a>
        </div>
      </div>
      <p className={footerStyles.copy}>
        Website Designed by {data.site.siteMetadata.author} | &copy; 2019
      </p>
    </footer>
  )
}

export default Footer
