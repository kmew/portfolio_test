import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
`

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image:url('https://wallpaperplay.com/walls/full/f/3/d/121407.jpg');
  background-size:cover;
  background-position:center;
`

class Background extends Component {
  render() {
    return (
      <Wrapper>
        <Img />
      </Wrapper>
    )
  }
}

export default Background
