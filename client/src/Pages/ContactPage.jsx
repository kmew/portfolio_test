import React, { Component } from "react";

//LIBs
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

//elements
import ContactTabbar from "../Components/Contactpage/ContactTabbar";

//setup styled

const WrapperContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  /* box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75); */
  display: flex;
  flex-flow: row;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    max-height: auto;
    flex-flow: column;
  }
`;

const Flexbox = styled.div`
  width: 350px;
  height: 300px;
  background-color: #ffffff;
  align-items: center;
  transform: scale(0.95);

  @media (max-width: 768px) {
    position: absolute;
    left: 10px;
    top: 0px;
    width: 280px;
    max-height: 450px;
    transform: translateX(${props => props.xPosition})
      scale(${props => props.scale});
    transition: transform 0.5s linear;
  }
`;

const FlexboxLogoImage = styled.div`
  width: 350px;
  height: 300px;
  background-color: #ffffff;
  align-items: left;
  transform: scale(0.95);

  @media (max-width: 768px) {
    position: absolute;
    left: 10px;
    top: 0px;
    width: 280px;
    max-height: 450px;
    transform: translateX(${props => props.xPosition})
      scale(${props => props.scale});
    transition: transform 0.5s linear;
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
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 95%;
    height: 8%;
    margin: 5px;
    font-size: 1.3rem;
  }
`;

const Box2 = styled.h4`
  width: 80%;
  height: 5%;
  margin: 20px;
  margin-left: 50px;
  margin-bottom: 50px;

  text-align: left;
  color: #a9a9a9;
  font-size: 1.1rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    margin: 5px;
    font-size: 1rem;
  }
`;

const Box3 = styled.h4`
  width: 90%;
  height: 5%;
  margin-left: 50px;
  text-align: left;
  color: #c0c0c0;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    margin: 5px;
    font-size: 1rem;
  }
`;

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 50px;

  text-align: left;

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
      <div>
        <WrapperContainer>
          {/* Logo flexbox */}
          <FlexboxLogoImage>
            <Space />
            <LogoImage src="https://www.freelogodesign.org/file/app/client/thumb/1803f66f-d7c0-425a-83b9-0ee0213b8cba_200x200.png?1568974837896" />
            <Box2></Box2>
          </FlexboxLogoImage>
          {/* Contact Flexbox */}
          <Flexbox>
            <Space />
            <Box1>CONTACT US</Box1>
            <Box2>
              Ratchadaphisek Rd, Tha Phra, Bangkok Yai, Krung Thep Maha Nakhon
              10600
            </Box2>
            <Box3>Tel.(Mootam) 092-2695434</Box3>
            <Box3>Tel.(PD) 095-5555555</Box3>
          </Flexbox>

          {/* Social Icon Flexbox */}
          <Flexbox>
            <Space />
            <Box1>SOCIAL</Box1>
            <SocialIcon
              style={{
                margin: "2px"
              }}
              network="twitter"
            />
            <SocialIcon
              style={{
                margin: "2px"
              }}
              url="https://www.facebook.com/"
              network="facebook"
            />
            <SocialIcon
              style={{
                margin: "2px"
              }}
              url="https://www.instagram.com/"
              network="instagram"
            />
          </Flexbox>
        </WrapperContainer>
        <ContactTabbar/>
      </div>
    );
  }
}
