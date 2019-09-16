import React, { Component } from "react";
//LIB
import Slider from "react-slick";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SocialIcon } from "react-social-icons";
import { Carousel } from "react-responsive-carousel";

//elements
import ChooseButton from "./ChooseButton";

//setup styled for Chooseway boxes

const StyledChooseButton = styled(ChooseButton)`
  display: none;
`;

const DecorClass = styled.div`
  width: 100%;
  height: 500px;
  /* padding-center: 50px; */
  display: flex;
  justify-content: center;
`;

const Flexbox1 = styled.div`
  width: 350px;
  height: 400px;
  margin-right: 10px;

  background-color: #ffffff;
  /* border-radius: 20px; */
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
  &:hover ${StyledChooseButton} {
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
  /* border-radius: 20px; */
  /* box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75), */
  /* 0 5px 12px 0 rgba(0, 0, 0, 0.75); */

  justify-content: center;
  align-items: center;

  transform: scale(0.9);

  /*Adding*/
  cursor: pointer;

  &:hover {
    transform: scale(1);
  }
  &:hover ${StyledChooseButton} {
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

const Drawtest = styled.div`
  height: 30%;
  width: 100%;

  box-shadow: 0px 0.5px 0.5px 0px rgba(0, 0, 0, 0.75),
    0 2px6px 0 rgba(0, 0, 0, 0.75);
  /* background-color: #d03737; */
  background-color: #ffffff;
  position: relative;
`;

const Circle = styled.div`
  width: 220px;
  height: 220px;

  box-sizing: border-box;
  border: 6px solid #ffffff;
  /* position: absolute; */
  top: calc(50% - 250px);
  left: calc(50% - 105px);
  position: absolute;
  z-index: 1000;
  box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75);  
  border-radius: 50%;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    position: absolute;
    top: calc(50% - 180px);
    left: calc(50% - 75px);
  }
`;

const Circle2 = styled.div`
  width: 220px;
  height: 220px;

  box-sizing: border-box;
  border: 6px solid #ffffff;
  position: absolute;
  top: calc(50% - 250px);
  left: calc(60% - 150px);
  z-index: 1000;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0),
    0 2px 8px 0 rgba(0, 0, 0, 0.75);  
  border-radius: 50%;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    position: absolute;
    top: calc(50% - 180px);
    left: calc(50% - 75px);
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
    width: 95%;
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
  height: 15%;
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
      activeButton: "left"
    };
  }

  render() {
    const { xPosition1, xPosition2, scale1, scale2, activeButton } = this.state;

    const { BodyText } = this.props;

    return (
      <DecorClass>
        {/* Box 1 */}
        <Flexbox1 xPosition={xPosition1} scale={scale1}>
          <Drawtest />
          <Circle>
            <Pic src="https://www.pnglot.com/pngfile/detail/493-4930333_user-icon-my-profile-icon-png.png" />
          </Circle>
          <Space />
          <Box1>{BodyText.Text3}</Box1>
          <Box2>{BodyText.Text4}</Box2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <SocialIcon url="http://twitter.com" />
            <SocialIcon url="http://facebook.com" />
            <SocialIcon url="http://instagram.com" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <StyledChooseButton
              activeButton={activeButton === "left"}
              ButtonText={BodyText.Text7}
            />
          </div>
          <Box3>{BodyText.Text4}</Box3>
        </Flexbox1>

        {/* Box 2 */}
        <Flexbox1 xPosition={xPosition2} scale={scale2}>
          <Drawtest />
          <Circle2>
            <Pic src="https://www.pnglot.com/pngfile/detail/493-4930333_user-icon-my-profile-icon-png.png" />
          </Circle2>
          <Space />
          <Box1>{BodyText.Text5}</Box1>
          <Box2>{BodyText.Text6}</Box2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <SocialIcon url="http://twitter.com" />
            <SocialIcon url="http://facebook.com" />
            <SocialIcon url="http://instagram.com" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <StyledChooseButton
              activeButton={activeButton === "right"}
              ButtonText={BodyText.Text7}
            />
          </div>
          <Box3>{BodyText.Text4}</Box3>
        </Flexbox1>
      </DecorClass>
    );
  }
}

// const Wrapper = styled.div`
//   /* display: flex;
//     justify-content: center; */
//   width: 100%;
//   padding: 32px;
// `;

// const Page = styled.div`
//   width: 100%;
// `;

// export default class MembersBody extends Component {

//   render() {
//     return (
//       <Wrapper>
//         <Slider
//             speed={500}
//             slideToShow={1}
//             slidesToScroll={1}
//             infinite={false}
//             dots={true}>
//         <Page>Page 1</Page>
//         <Page>Page 2</Page>
//         <Page>Page 3</Page>
//         </Slider>
//       </Wrapper>
//     );
//   }
// }
