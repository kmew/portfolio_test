import React, { Component } from "react";
import styled from "styled-components";

const DataHeaderBox = styled.div`
  width: 100%;
  height: 30px;
  background-color: white;
  padding: 5px;

  margin-top: 60px;
  margin-bottom: 50px;
  margin-right: 5px;
  margin-left: 5px;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 10px;
  }
`;

const Flexbox1 = styled.div`
  text-align: right;
  margin-right: 7px;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 10px;
  }
`;

const Flexbox2 = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    max-height: 10px;
  }
`;
const Text1 = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

const Text2 = styled.h1`
  color: black;
  font-size: 2.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
`;

export default class ChooseboxHead extends Component {
  render() {
    const {
      HeadText,
    } = this.props
    return (
      <DataHeaderBox>
        <Flexbox1>
          <Text1>{HeadText.Text1}</Text1>
        </Flexbox1>

        <Flexbox2>
          <Text2>{HeadText.Text2}</Text2>
        </Flexbox2>
      </DataHeaderBox>
    );
  }
}
