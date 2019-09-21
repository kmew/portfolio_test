import React, { Component } from "react";

//LIBs
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//elements
import MembersButton from "../elements/MembersButton";

//setup styled
const StyledMembersButton = styled(MembersButton)`
  display: none;
`;

const WrapperContainer = styled.div`
  width: 100%;
  height: 500px;
  /* padding-center: 50px; */
  display: flex;
  justify-content: center;
`;

const Flexbox1 = styled.div`
  width: 350px;
  /* height: 400px; */
  height: ${props => (props.open ? "400px" : "500px")}
  margin-right: 10px;
  background-color: #ffffff;
  box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
  transform: scale(0.95);

  /*Adding*/
  cursor: pointer;

  &:hover {
    transform: scale(1);
  }
  &:hover ${StyledMembersButton} {
    display: flex;
  }
  /* setting animate */

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

const Flexbox2 = styled.div`
  width: 100%;
  height: 500px;
  margin-right: 10px;
  background-color: #ffffff;
  border: 1rem solid;
  justify-content: center;
  align-items: center;
  transform: scale(0.9);

  /*Adding*/
  cursor: pointer;

  &:hover {
    transform: scale(1);
  }
  &:hover ${StyledMembersButton} {
    display: flex;
  }

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

const Drawtest = styled.div`
  height: 30%;
  width: 100%;
  box-shadow: 0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.75),
    0 2px6px 0 rgba(0, 0, 0, 0.75);
  background-color: #ffffff;
  position: relative;
`;

const FlexRectangleLeft = styled.div`
  width: 300px;
  height: 100px;

  box-sizing: border-box;
  border: 6px solid #ffffff;
  /* position: absolute; */
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  position: absolute;
  z-index: 1000;
  /* box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75); */
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    position: absolute;
    /* top: calc(50% - 180px);
    left: calc(50% - 75px); */
  }
`;

const FlexRectangleRight = styled.div`
  width: 300px;
  height: 100px;

  box-sizing: border-box;
  border: 6px solid #ffffff;
  position: absolute;
  /* top: calc(50% - 150px); */
  /* left: calc(50% - 140px); */
  z-index: 1000;
  /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0), 0 2px 8px 0 rgba(0, 0, 0, 0.75); */
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    position: absolute;
    /* top: calc(50% - 180px);
    left: calc(50% - 75px); */
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
`;

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
`;

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
`;

const Pic = styled.img`
  height: 150px;
  width: auto;
  /* position: absolute; */
  /* top: calc(50% - 210px);
  left: calc(60% - 110px); */
  z-index: 1001;
  @media (max-width: 768px) {
    width: 80%;
    max-height: 80%;
  }
`;

const Pic1 = styled.img`
  height: auto;
  width: auto;
  /* position: absolute; */
  /* top: calc(50% - 210px);
  left: calc(60% - 110px); */
  @media (max-width: 768px) {
    width: 80%;
    max-height: 80%;
  }
`;

const LineDis = styled.hr`
  width: 60%;
`;

// Main Function
export default class ChooseDesignbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition1: "0px",
      xPosition2: "260px",
      scale1: "1",
      scale2: "0.8",
      activeButton: "left",
      // New Adding
      open: true
    };
  }

  // New Adding
  handleSpan = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };

  render() {
    const { xPosition1, xPosition2, scale1, scale2, activeButton } = this.state;

    // const { BodyText } = this.props;

    // New Adding
    const { open, } =this.state;

    return (
      <WrapperContainer>
        <Flexbox1 xPosition={xPosition1} scale={scale1}>
          <Drawtest />
          <FlexRectangleLeft>
            <Pic src="https://www.pnglot.com/pngfile/detail/493-4930333_user-icon-my-profile-icon-png.png" />
          </FlexRectangleLeft>
          <Space />
          <Box1>Mootam</Box1>
          <Box2>MR. Tantikorn Phuprasurt</Box2>
          <Box3>Frontend Developer</Box3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "5%"
            }}
            // New adding
            onClick={this.handleDrawer}
            open={open}
          >
            <StyledMembersButton
              activeButton={activeButton === "left"}
              // ButtonText={BodyText.Text7}
            />
          </div>
        </Flexbox1>

        <Flexbox1 xPosition={xPosition2} scale={scale2}>
          <Drawtest />
          <FlexRectangleRight>
            <Pic src="https://www.pnglot.com/pngfile/detail/493-4930333_user-icon-my-profile-icon-png.png" />
          </FlexRectangleRight>
          <Space />
          <Box1>PD</Box1>
          <Box2>MR. TISSATAT CHAROENCHAI</Box2>
          <Box3>Fullstack Developer</Box3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "5%"
            }}
          >
            <StyledMembersButton
              activeButton={activeButton === "right"}
              // ButtonText={BodyText.Text7}
            />
          </div>
        </Flexbox1>
      </WrapperContainer>
    );
  }
}
