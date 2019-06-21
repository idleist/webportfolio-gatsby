import React from "react"
import logo from "../assets/svg/logo.svg"
import "./mainnav.scss"

class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false,
      scaleNav: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 100) {
        this.setState({
          scaleNav: true,
        })
      } else {
        this.setState({
          scaleNav: false,
        })
      }
    })
  }

  openNav = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <nav className={`nav ${this.state.scaleNav ? "navbar-float" : ""}`}>
        <img className="logo" src={logo} alt="br logo" />
        <div
          className={`menu-toggler ${!this.state.showMenu ? "" : "open"}`}
          onClick={this.openNav}
        >
          <div
            className={`bar half start ${!this.state.showMenu ? "" : "open"}`}
          ></div>
          <div className={`bar ${!this.state.showMenu ? "" : "open"}`}></div>
          <div
            className={`bar half end ${!this.state.showMenu ? "" : "open"}`}
          ></div>
        </div>
        <div className="top-nav">
          <ul className="topnav-list">
            <li>
              <a className="topnav-link" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="topnav-link" href="#projects">
                Portfolio
              </a>
            </li>
            <li>
              <a className="topnav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="topnav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={`overlay-nav ${!this.state.showMenu ? "" : "open"}`}>
          <ul className="nav-list">
            <li>
              <a className="nav-link" onClick={this.openNav} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={this.openNav} href="#projects">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={this.openNav} href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={this.openNav} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default MainNav
