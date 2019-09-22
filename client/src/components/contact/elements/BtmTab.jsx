import React, { Component } from 'react'

// LIBs
import styled from 'styled-components'

// setup styled
const WrapperContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 65%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Flexbox = styled.div`
  width: fit-content;
  height: 100%;
`

// const FlexboxSocialIcon = styled.div`
//   width: 400px;
//   height: 50px;
//   align-items: left;
//   margin-left: 100px;
//   border: 1px solid red;

//   @media (max-width: 768px) {
//     position: absolute;
//     left: 10px;
//     top: 0px;
//     width: 280px;
//     max-height: 450px;
//   }
// `

const Txt = styled.h2`
  margin: 10px 15px 0px 15px;
  text-align: left;
  color: grey;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`

// Main Function
export default class ContactPage extends Component {
  render() {
    return (
      <WrapperContainer>
        {/* Logo flexbox */}
        {/* <FlexboxLogoImage>
          <LogoImage src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png" />
        </FlexboxLogoImage> */}
        {/* Contact Flexbox */}
        <Flexbox>
          <Txt>© 2019 by MTPD Team. Proudly created with React</Txt>
        </Flexbox>
      </WrapperContainer>
    )
  }
}
