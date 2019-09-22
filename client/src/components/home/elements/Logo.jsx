import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin-top: 70px;
    width: fit-content;
`

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    
    @media (max-width: 425px) {
      width: 75%;
      height: 75%;
    }
`


class Logo extends Component {
  render() {
    return (
      <Wrapper>
        <Box>
          <LogoImage src="https://www.freelogodesign.org/file/app/client/thumb/1803f66f-d7c0-425a-83b9-0ee0213b8cba_200x200.png?1568974837896" />
        </Box>
      </Wrapper>
    )
  }
}

export default Logo
