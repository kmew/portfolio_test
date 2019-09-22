import React, { Component } from 'react'
import styled from 'styled-components'
import Box from './Box'

/* Display Button */
const ButtonFlexDisplay = styled.div`
  display: ${(props) => (props.activeButton ? 'flex' : 'none')};
`

const ButtonFlexBox = styled.div`
  width: 50%;
  max-height: 100%;
  text-align: center;

  @media (max-width: 768px) {
    width: 75%;
    max-height: fit-content;
  }
`

const ButtonFlexBoxDesign = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  width: 90%;
  margin-top: 4px;
  color: black;
  border: 0.5rem solid white;
  /* border-radius: 10px; */
  padding: 10px 0px;
  cursor: pointer;
`

const ButtonToggle = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Test
  </button>
)

class ToggleButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isShow: false }

    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow = () => {
    // this.setState(state => ({ isShow: !state.isShow }));
    const { isShow } = this.state
    this.setState({ isShow: !isShow })
  };

  handleLink = () => {
    window.location = 'http://localhost:3000/Memberspage/en'
  };

  render() {
    const {
      handleSpan1,
    } = this.props

    const {
      isShow,
    } = this.state

    const TestText = 'Read More'

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
        {isShow && <Box />}
      </ButtonFlexBox>
    )
  }
}

export default ToggleButton
