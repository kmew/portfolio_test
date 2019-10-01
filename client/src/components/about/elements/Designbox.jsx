import React, { Component } from "react";

// LIBs
import styled from "styled-components";
import Slider from "react-slick";
import { Menu, Carousel, Card, Row, Col, Rate } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// elements
import MembersButton from "./Button";

// setup styled
const StyledMembersButton = styled(MembersButton)`
  display: none;
`;

const WrapperContainer = styled.div`
  width: 100%;
  /* height: fit-content; */
  height: 300px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1rem solid black;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const ProfileCardLeft = styled.div`
  width: 50vh;
  height: auto;
  border: 1rem solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: #ffffff;
  box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75);

  position: absolute;
  z-index: 11;
  top: calc(50% - 200px);
  left: calc(50% - 400px);
`;

const ProfileCardRight = styled.div`
  width: 50vh;
  height: auto;
  border: 1rem solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-color: #ffffff;
  box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75);

  position: absolute;
  z-index: 11;
  top: calc(50% - 200px);
  left: calc(50% - 0px);
`;
const ImgBox = styled.div`
  /* width: fit-content;
  height: fit-content; */
  width: 120px;
  height: 240px;

  box-sizing: border-box;
  border: 6px solid #ffffff;

  /* box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75); */
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 10;
  top: calc(50% - 10px);
  left: calc(50% - 350px);

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    /* top: calc(50% - 180px);
    left: calc(50% - 75px); */
  }
`;
const ImgBoxRight = styled.div`
  /* width: fit-content;
  height: fit-content; */
  width: 120px;
  height: 240px;

  box-sizing: border-box;
  border: 6px solid #ffffff;

  /* box-shadow: 0.5px 1px 1px 0.5px rgba(0, 0, 0, 0.75),
    0 3px 10px 0 rgba(0, 0, 0, 0.75); */
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 10;
  top: calc(50% - 10px);
  left: calc(50% - 800px);

  @media (max-width: 768px) {
    width: 150px;
    max-height: 150px;
    /* top: calc(50% - 180px);
    left: calc(50% - 75px); */
  }
`;

// const FlexRectangleRight = styled.div`
//   width: 300px;
//   height: 100px;

//   box-sizing: border-box;
//   border: 6px solid #ffffff;
//   /* top: calc(50% - 150px); */
//   /* left: calc(50% - 140px); */
//   /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0), 0 2px 8px 0 rgba(0, 0, 0, 0.75); */
//   background-color: #ffffff;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 768px) {
//     width: 150px;
//     max-height: 150px;
//     /* top: calc(50% - 180px);
//     left: calc(50% - 75px); */
//   }
// `

const Box1 = styled.h2`
  width: 100%;
  height: 4%;
  margin: 10px;

  text-align: center;

  color: #11141d;
  text-decoration: none;
  font-size: 46px;
  font-family: "Anton", sans-serif;

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
  color: #11141d;
  font-size: 20px;
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
  font-size: 18px;
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
`;

// Main Function
export default class Designbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      // autoplay: false,
    };
  }

  // New Adding
  handleSpan = () => {
    const { open } = this.state;
    const tmp = !open;
    this.setState({
      open: tmp
    });
  };

  render() {
    // New Adding
    const { open } = this.state;
    console.log(open);

    console.log("[Current Settings]", this.state);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      // <WrapperContainer>
      //   <Slider key={this.state.sliderKey} {...this.state}>
      //   <ProfileCardLeft>
      //   <Box1>Mootam</Box1>
      //   <Box2>MR. Tantikorn Phuprasurt</Box2>
      //   <Box3>Frontend Developer</Box3>
      //   <MembersButton />
      //   </ProfileCardLeft>

      //   <ImgBox>
      //     <img src="https://static.wixstatic.com/media/e1c78c_26b40f1dd4d54a349590fb5ae4c4fbbb.jpg/v1/fill/w_594,h_762,al_c,q_85/e1c78c_26b40f1dd4d54a349590fb5ae4c4fbbb.webp?fbclid=IwAR1TjQedfRlb7qPdbDBoLO_62Qi_cfQHdETJHrFP9crU7ESjS4PQjicRD5A" />
      //   </ImgBox>

      //     <ProfileCardRight>
      //       <Box1>PD</Box1>
      //       <Box2>MR. TISSATAT CHAROENCHAI</Box2>
      //       <Box3>Fullstack Developer</Box3>
      //       <MembersButton />
      //     </ProfileCardRight>

      //     <ImgBoxRight>
      //       <img src="https://static.wixstatic.com/media/e1c78c_3028e3e9108a4eab96810509b09ea2a1.jpg/v1/fill/w_615,h_713,al_c,q_85/e1c78c_3028e3e9108a4eab96810509b09ea2a1.webp" />
      //     </ImgBoxRight>
      //   </Slider>
      // </WrapperContainer>
      <WrapperContainer>
        <Slider {...settings}>
          {/* <ProfileCardLeft>
              <Pic src="http://placekitten.com/g/400/200" />
            </ProfileCardLeft>
            <ProfileCardRight>
              <Pic src="http://placekitten.com/g/400/200" />
            </ProfileCardRight> */}
          <div style={{ background: 'red' }}>
            <h3>1</h3>
          </div>
          <div style={{ background: 'green' }}>
            <h3>2</h3>
          </div>
        </Slider>
        {/* <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Carousel> */}
      </WrapperContainer>
    );
  }
}
