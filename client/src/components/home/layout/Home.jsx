import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  width: 100%
  position: fixed;
`

const Img = styled.div`
  height: 100vh;
  background-image:url('https://wallpaperplay.com/walls/full/f/3/d/121407.jpg');
  background-size:cover;
  background-position:center;
`

const TextCard = styled.div`
  width: 500px;
  padding: 0px 30px 0px 30px;
  position: fixed;
  z-index: 1;
  left: 170px;
  bottom: 80px;
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


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <TextCard>
          <CardHead>HEADER</CardHead>
          <CardP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, adipisci maxime culpa obcaecati numquam ex.
          </CardP>
        </TextCard>
        <Img src="https://wallpaperaccess.com/full/667339.jpg" alt="First" />
      </Wrapper>
    )
  }
}

export default Home
