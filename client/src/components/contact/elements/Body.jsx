import React, { Component } from 'react'

// LIBs
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'

// elements
import ContactTabbar from './BtmTab'

// setup styled

const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`

const Flexbox = styled.div`
  width: 350px;
  height: 300px;
  margin: 0px 40px;
  align-items: center;

  @media (max-width: 425px) {
      width: 100%;
      height: 100%;
      margin: 0px;
  }
`

const Box1 = styled.h2`
  width: fit-content;
  height: fit-content;
  margin-left: 40px;
  margin-top: 5px;
  margin-bottom: 50px;
  background-color: #D2DAC5;

  padding: 5px;
  font-size: 24px;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 425px) {
    margin: 15px 5px 5px 5px;
    font-size: 21px;
  }
`

const Box2 = styled.h4`
  width: fit-content;
  height: fit-content;
  margin: 30px 30px 40px 40px;
  background-color: #a9a9a9;

  padding: 5px;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 425px) {
    margin: 10px 5px 5px 5px;
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
`

const Box3 = styled.h4`
  width: fit-content;
  height: fit-content;
  margin-left: 40px;
  background-color: #c0c0c0;

  padding: 5px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 425px) {
    margin: 10px 5px 5px 5px;
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
`

const IconBox = styled.div`
    width: fit-content;
    height: fit-context;
    margin-left: 40px;

    @media (max-width: 425px) {
      margin: 10px 5px 5px 5px;
    }
`

// Main Function
export default class ContactPage extends Component {
  render() {
    return (
      <ContactWrapper>
        <WrapperContainer>
          {/* Contact Flexbox */}
          <Flexbox>
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
            <Box1>SOCIAL</Box1>
            <IconBox>
              <SocialIcon
                style={{
                  margin: '2px',
                }}
                network="twitter"
              />
              <SocialIcon
                style={{
                  margin: '2px',
                }}
                url="https://www.facebook.com/"
                network="facebook"
              />
              <SocialIcon
                style={{
                  margin: '2px',
                }}
                url="https://www.instagram.com/"
                network="instagram"
              />
            </IconBox>
          </Flexbox>
        </WrapperContainer>
        <ContactTabbar />
      </ContactWrapper>
    )
  }
}
