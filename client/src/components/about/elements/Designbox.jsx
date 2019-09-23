import React, { Component } from 'react'

// LIBs
import styled from 'styled-components'
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import FireplaceIcon from '@material-ui/icons/Fireplace';

// elements
import MembersButton from './Button'

const WrapperContainer = styled.div`
  width: 100%;
  margin: 30px;
  display: flex;
  justify-content: center;
  @media (max-width: 425px) {
    align-items: center;
    flex-direction: column;
  }
`

const ProfileCard = styled.div`
  width: 35vh;
  height: fit-content;
  border-radius: 7px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 30px 20px 40px 20px;
  background-color: #EFEFEF;
`

const ImgBox = styled.div`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  border: none;
  background-color: none;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    /* top: calc(50% - 180px);
    left: calc(50% - 75px); */
  }
`

const Box1 = styled.h2`
  width: 100%;
  height: 4%;
  margin: 10px;

  text-align: center;

  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    height: 8%;
    margin: 5px;

    font-size: 1.3rem;
  }
`

const Box2 = styled.h4`
  width: 90%;
  height: 5%;
  margin: 20px;

  text-align: center;
  color: #a9a9a9;
  font-size: 1.2rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    margin: 5px;
    font-size: 1rem;
  }
`

const Box3 = styled.h4`
  width: 90%;
  height: 5%;
  margin: 10px;

  text-align: center;
  color: #c0c0c0;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    margin: 5px;

    font-size: 1rem;
  }
`

const StyledLocalAtmIcon = styled(LocalAtmIcon) `
  && {
    font-size: 150px;
    color: #50514F;
    background: #FFE066;
    @media (max-width: 768px) {
      font-size: 100px;
  }
`

const StyledFireplaceIcon = styled(FireplaceIcon) `
  && {
    font-size: 150px;
    color: #50514F;
    background: #FFE066;
    @media (max-width: 768px) {
      font-size: 100px;
  }
`

// Main Function
export default class ChooseDesignbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // xPosition1: '0px',
      // xPosition2: '260px',
      // scale1: '1',
      // scale2: '0.8',
      // activeButton: 'left',
      // New Adding
      open: true,
    }
  }

  // New Adding
  handleSpan = () => {
    const { open } = this.state
    const tmp = !open
    this.setState({
      open: tmp,
    })
  };

  render() {
    // const { xPosition1, xPosition2, scale1, scale2, activeButton } = this.state

    // const { BodyText } = this.props;

    // New Adding
    const {
      open,
    } = this.state
    console.log(open)

    return (
      <WrapperContainer>
        <ProfileCard>
          <ImgBox>
            {/* <Pic src="https://www.pnglot.com/pngfile/detail/493-4930333_user-icon-my-profile-icon-png.png" /> */}
            <StyledLocalAtmIcon />
          </ImgBox>
          <Box1>Mootam</Box1>
          <Box2>MR. Tantikorn Phuprasurt</Box2>
          <Box3>Frontend Developer</Box3>
          <MembersButton />
        </ProfileCard>

        <ProfileCard>
          <ImgBox>
            <StyledFireplaceIcon />
          </ImgBox>
          <Box1>PD</Box1>
          <Box2>MR. Tissatat Charoenchai</Box2>
          <Box3>Fullstack Developer</Box3>
          <MembersButton />
        </ProfileCard>
      </WrapperContainer>
    )
  }
}
