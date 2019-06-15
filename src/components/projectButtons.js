import React from "react"
import styled from "styled-components"
import { FaTv } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const ProjectBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const ProjectBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.3em 1.3em;
  background-color: #168d8d;
  border-radius: 5px;
  margin-bottom: 0.3em;

  &:nth-child(1) {
    margin-right: 0.3em;
  }
  svg {
    color: #fff;
    margin-right: 0.3em;
  }

  p {
    text-transform: uppercase;
  }
`

const ProjectBtns = ({ demoHref, codeHref }) => (
  <ProjectBtnContainer>
    <ProjectBtn href={demoHref} target="_blank">
      <FaTv size={20} />
      <p>view demo</p>
    </ProjectBtn>
    <ProjectBtn href={codeHref} target="_blank">
      <FaGithub size={20} />
      <p>view code</p>
    </ProjectBtn>
  </ProjectBtnContainer>
)

export default ProjectBtns
