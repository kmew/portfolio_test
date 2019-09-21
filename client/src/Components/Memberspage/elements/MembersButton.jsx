import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import styled from "styled-components";

/*Display Button*/
const ButtonFlexDisplay = styled.div`
  display: ${props => (props.activeButton ? "flex" : "none")};
`;

const ButtonFlexBox = styled.div`
  width: 50%;
  max-height: 100%;
  text-align: center;

  @media (max-width: 768px) {
    width: 75%;
    max-height: 30px;
  }
`;

const ButtonFlexBoxDesign = styled.button`
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

const TextBox = styled.div`
  width: 100%;
  max-height: 100%;
  text-align: center;
`;

const ButtonToggle = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Test
  </button>
);

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow = () => {
    // this.setState(state => ({ isShow: !state.isShow }));
    const { isShow } = this.state;
    this.setState({ isShow: !isShow });
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
      <ButtonFlexBox>
        <br />
        <ButtonFlexBoxDesign onClick={this.toggleShow}>
          {TestText}
        </ButtonFlexBoxDesign>
        {this.state.isShow && <Box />}
      </ButtonFlexBox>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <TextBox>
        A portfolio is a grouping of financial assets such as stocks, bonds,
        commodities, currencies and cash equivalents, as well as their fund
        counterparts, including mutual, exchange-traded and closed funds. A
        portfolio can also consist of non-publicly tradable securities, like
        real estate, art, and private investments.
      </TextBox>
    );
  }
}

export default ToggleButton;
