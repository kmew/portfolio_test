import React, { Component, useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
    width: 100%;
    height: fit-content;
    position: fixed;
    z-index: 1;
    text-align: center;
`

const Box = styled.div`
    background: rgba(169,169,169,0.5);
    width: fit-content;
    padding: 10px 20px;
    border-radius: 10px;
`

const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
`


class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <Box>
          <Text>TEST</Text>
        </Box>
      </Wrapper>
    )
  }
}

export default Logo
