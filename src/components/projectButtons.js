import React from "react"
import styled from "styled-components"
import { FaTv } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const ProjectBtnContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProjectBtn = styled.a`
  display: flex;
  align-items: center;
  margin: 0 0.3rem;
  padding: 0.3em 1.3em;
  background-color: #168d8d;
  border-radius: 5px;
  @media screen and (max-width: 690px) {
    justify-content: center;
    width: 40%;
    margin-bottom: 0.3em;
  }

  svg {
    color: #fff;
    margin-right: 0.3em;
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
  }
`

const ProjectBtns = ({ demoHref, codeHref }) => (
  <ProjectBtnContainer>
    <ProjectBtn href={demoHref} target="_blank">
      <FaTv size={28} />
      <p>view demo</p>
    </ProjectBtn>
    <ProjectBtn href={codeHref} target="_blank">
      <FaGithub size={28} />
      <p>view code</p>
    </ProjectBtn>
  </ProjectBtnContainer>
)

export default ProjectBtns
