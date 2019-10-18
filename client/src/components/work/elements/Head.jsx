import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Box = styled.div`
    margin-top: 50px;
    background: rgba(169,169,169,0.5);
    width: fit-content;
    padding: 10px 20px;
    border-radius: 10px;
`

const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
`


class Head extends Component {
  handleGoLogin = () => {
    window.location.href='http://localhost:3000/Login'
  }

  render() {
    return (
      <Wrapper>
        <Box onClick={this.handleGoLogin}>
          <Text>WORK</Text>
        </Box>
      </Wrapper>
    )
  }
}

export default Head
