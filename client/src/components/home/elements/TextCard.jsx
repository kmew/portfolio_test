import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Card = styled.div`
  width: 400px;
  padding: 10px 30px 10px 30px;
  position: relative;
  z-index: 1;
  left: 130px;
  background: rgba(169,169,169,0.1);
  border-radius: 7px;
  @media (max-width: 1024px) {
    width: 380px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 425px) {
    left: 70px;
    width: 250px;
    padding: 5px 20px 5px 20px;
  }
  @media (max-width: 320px) {
    left: 20px;
    width: 250px;
    padding: 5px 20px 5px 20px;
  }
`

const CardHead = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: #D2DAC5;
  margin: 10px 0px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`

const CardP = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #D2DAC5;
  margin: 5px 0px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 425px) {
    margin: 5px 0px;
  }
`


class TextCard extends Component {
  render() {
    return (
      <Wrapper>
        <Card>
          <CardHead>HEADER</CardHead>
          <CardP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, adipisci maxime culpa obcaecati numquam ex.
          </CardP>
        </Card>
      </Wrapper>
    )
  }
}

export default TextCard
