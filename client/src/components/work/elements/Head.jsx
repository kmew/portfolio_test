import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Box = styled.div`
    margin-top: 30px;
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
  render() {
    return (
      <Wrapper>
        <Box>
          <Text>WORK</Text>
        </Box>
      </Wrapper>
    )
  }
}

export default Head
