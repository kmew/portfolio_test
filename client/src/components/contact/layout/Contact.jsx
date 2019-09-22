import React, { Component } from 'react'
import styled from 'styled-components'

import ContactBody from '../elements/Body'


const Wrapper = styled.div`
    width: 100%
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const ColoredBox = styled.div`
    width: 65%;
    height: 100%;
    background: #70C1B3;
    background-size:cover;
    background-position:center;
`


class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <ColoredBox>
          <ContactBody />
        </ColoredBox>
      </Wrapper>
    )
  }
}

export default Contact
