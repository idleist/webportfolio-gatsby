import React from "react"
import styled from "styled-components"
import "./contact.scss"

import contactBgsm from "../assets/svg/contactbgsm.svg"
import contactBgmd from "../assets/svg/contactbgmd.svg"
import contactBg from "../assets/svg/contactbg.svg"

const ContactSection = styled.section`
  width: 100%;
  background: url(${contactBgsm}) no-repeat;
  background-size: cover;

  @media screen and (min-width: 600px) {
    background: url(${contactBgmd}) no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 900px) {
    background: url(${contactBg}) no-repeat;
    background-size: cover;
  }
`
class Contact extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // this.state = {
  //   //   name: "",
  //   //   email: "",
  //   //   message: "",
  //   //   float: true,
  //   // }
  //   // this.handleChange = this.handleChange.bind(this)
  // }

  componentDidMount() {
    const formInputs = document.querySelectorAll(".form-input")

    formInputs.forEach(formInput => {
      formInput.addEventListener("focus", e => {
        e.target.parentElement.classList.add("active")
      })

      formInput.addEventListener("blur", e => {
        if (!e.target.value) {
          e.target.parentElement.classList.remove("active")
        }
      })
    })
  }

  // handleChange(e) {
  //   this.setState({ [e.target.name]: [e.target.value] })
  // }

  render() {
    return (
      <ContactSection id="contact">
        <div className="form-container">
          <h2 className="form-title">contact</h2>
          <form
            className="form"
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <input type="hidden" name="contact" value="contact" />
            <div className="form-input-container">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                // onChange={this.handleChange}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                // onChange={this.handleChange}
              />
            </div>
            <div className="form-input-container">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                // onChange={this.handleChange}
              />
            </div>
            <div data-netlify-recaptcha="true"></div>
            <input className="submit-btn" type="submit" value="SEND MESSAGE" />
          </form>
        </div>
      </ContactSection>
    )
  }
}

export default Contact
