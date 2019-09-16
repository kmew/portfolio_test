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

const TextBox = styled.div`
    width: 100%;
    height: 100;
    padding: 150px 50px 30px 50px;
`

const Text = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
`

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <ColoredBox>
          <TextBox>
            <Text>PHONE: 0XX-XXX-XXXX</Text>
            <Text>EMAIL: example@exmail.com</Text>
          </TextBox>
        </ColoredBox>
      </Wrapper>
    )
  }
}

export default Contact
