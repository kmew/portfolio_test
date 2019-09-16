import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import styled from "styled-components";

const ButtonClass = styled.div`
  /*Display Button*/
  display: ${props => (props.activeButton ? "flex" : "none")};
`;

const ButtonBox = styled.div`
  width: 50%;
  max-height: 100%;
  text-align: center;

  @media (max-width: 768px) {
    width: 75%;
    max-height: 30px;
  }
`;

const ButtonLine = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  width: 90%;
  margin-top: 4px;
  background-color: #ffffff;
  color: black;
  border: 0.5rem solid white;
  /* border-radius: 10px; */
  padding: 10px 0px;
  cursor: pointer;
`;

const ButtonToggle = ({ onClick }) => ( <button onClick={onClick} type="button">Test</button>);

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: true, };

    // this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  handleLink = () => {
    window.location = "http://localhost:3000/Memberspage/en";
  };

  render() {
    const { activeButton, ButtonText, className } = this.props;

    const TestText = "Read More";

    return (
      // <ButtonBox
      // className={className}
      // activeButton={activeButton}
      //   onClick={this.handleLink}
      // >
      //   <ButtonLine>{TestText}</ButtonLine>
      // </ButtonBox>
      <ButtonBox className={className} activeButton={activeButton} isShow={this.state.isShow}>
        <ButtonLine>
          <ButtonToggle onClick={this.toggleShow}> Test</ButtonToggle>
        </ButtonLine>
      </ButtonBox>
    );
  }
}

export default ToggleButton;

