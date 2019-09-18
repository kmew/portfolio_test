import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Card = styled.div`
  width: 500px;
  padding: 10px 30px 10px 30px;
  position: relative;
  z-index: 1;
  left: 170px;
  background: rgba(169,169,169,0.1);
  border-radius: 7px;
`

const CardHead = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 28px;
  color: #D2DAC5;
  margin: 20px 0px;
`

const CardP = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: #D2DAC5;
  margin: 10px 0px;
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
