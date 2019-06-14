import React from "react"

// Logos
import htmlIcon from "../assets/svg/skills/html-icon.svg"
import cssIcon from "../assets/svg/skills/css-icon.svg"
import jsIcon from "../assets/svg/skills/js-icon.svg"
import reactIcon from "../assets/svg/skills/react-icon.svg"
import nodeIcon from "../assets/svg/skills/node-icon.svg"
import mongoIcon from "../assets/svg/skills/mongo-icon.svg"
import npmIcon from "../assets/svg/skills/npm-icon.svg"
import expressIcon from "../assets/svg/skills/express-icon.svg"
import pugIcon from "../assets/svg/skills/pug-icon.svg"
import sassIcon from "../assets/svg/skills/sass-icon.svg"

const Skill = ({ icon, altText, desc }) => (
  <div>
    <img src={icon} alt={altText} />
    <p>{desc}</p>
  </div>
)

const Skills = props => {
  return (
    <section id="skills">
      <h2>skills</h2>
      <div>
        <h3>front end</h3>
        <div>
          <Skill icon={htmlIcon} altText="html" desc="html" />
          <Skill icon={cssIcon} altText="css" desc="css" />
          <Skill icon={jsIcon} altText="javascript" desc="javascript" />
          <Skill icon={reactIcon} altText="react" desc="react" />
        </div>
      </div>
      <div>
        <h3>back end</h3>
        <div>
          <Skill icon={nodeIcon} altText="node" desc="node" />
          <Skill icon={mongoIcon} altText="mongo db" desc="mongo db" />
          <Skill icon={npmIcon} altText="npm" desc="npm" />
          <Skill icon={expressIcon} altText="express" desc="express" />
        </div>
      </div>
      <div>
        <h3>preprocessors</h3>
        <div>
          <Skill icon={pugIcon} altText="pug" desc="pug" />
          <Skill icon={sassIcon} altText="sass" desc="sass" />
        </div>
      </div>
    </section>
  )
}

export default Skills
