import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    width: 100%
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const ColoredBox = styled.div`
    width: 1200px;
    height: 100%;
    background: #70C1B3;
    background-size:cover;
    background-position:center;
`


class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <ColoredBox />
      </Wrapper>
    )
  }
}

export default Contact
