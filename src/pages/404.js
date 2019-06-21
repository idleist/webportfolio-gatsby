import React from "react"
import Nav from "../components/projectnav"
import errorImgSm from "../assets/images/error-image-sm.png"
import errorImgLg from "../assets/images/error-image.png"
import styled from "styled-components"

// const ErrorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: calc(100vh - 60px);
//   background: url(${errorImgSm}) no-repeat;
//   background-size: 100% 100%;

//   @media screen and (min-width: 900px) {
//     background: url(${errorImgLg}) no-repeat;
//     background-size: 100% 100%;
//   }

//   h1 {
//     font-family: "Just Another Hand", cursive;
//     font-size: 4rem;
//     color: #168d8d;
//     margin-top: 4em;
//   }

//   p {
//     font-size: 2rem;
//     color: #fff;
//   }
// `

const Error404 = () => (
  <React.Fragment>
    <Nav />
    <div>
      <h1>OOPS...Something went wrong.</h1>
      <p>please return to the main page</p>
    </div>
  </React.Fragment>
)

export default Error404
