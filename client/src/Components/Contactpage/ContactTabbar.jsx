import React, { Component } from "react";

//LIBs
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

//setup styled
const WrapperContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Flexbox = styled.div`
  width: 400px;
  height: 50px;
  background-color: black;
  align-items: center;
  transform: scale(0.95);

  @media (max-width: 768px) {
    position: absolute;
    left: 10px;
    top: 0px;
    width: 280px;
    max-height: 450px;
  }
`;

const FlexboxSocialIcon= styled.div`
  width: 400px;
  height: 50px;
  background-color: black;
  align-items: left;
  margin-left: 100px;

  @media (max-width: 768px) {
    position: absolute;
    left: 10px;
    top: 0px;
    width: 280px;
    max-height: 450px;
  }
`;

const Space = styled.div`
  height: 15%;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 30%;
  }
`;

const Box1 = styled.h2`
  width: 100%;
  height: 4%;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: 50px;

  text-align: left;
  color: grey;
  text-decoration: none;
  font-size: 1.0rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 95%;
    height: 8%;
    margin: 5px;
    font-size: 1.3rem;
  }
`;

const LogoImage = styled.img`
  width: 45px;
  height: 45px;

  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    margin: 5px;
    font-size: 1rem;
  }
`;

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
          <Space />
          <Box1>© 2019 by MTPD Team. Proudly created with React</Box1>
        </Flexbox>

        <FlexboxSocialIcon  >
          <Space />
          <Box1>Test</Box1>
        </FlexboxSocialIcon>
      </WrapperContainer>
    );
  }
}
