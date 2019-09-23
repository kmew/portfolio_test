import React, { Component } from 'react'
import styled from 'styled-components'
import Box from './Box'


const ButtonFlexBox = styled.div`
  width: 100%;
  max-height: 100%;
  text-align: center;
`

const ButtonFlexBoxDesign = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  width: 45%;
  margin-top: 4px;
  color: black;
  background: rgba(169,169,169,0.5);
  text-align: center;
  border: none;
  border-radius: 5px;
  /* border-radius: 10px; */
  padding: 10px 0px;
  cursor: pointer;
`

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
