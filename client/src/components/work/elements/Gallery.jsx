import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const GalleryBox = styled.div`
    width: 40%;
    border-radius: 10px;
    border: 1px solid #D2DAC5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
`

const ImgBox = styled.div`
    width: 30%;
    height: 30%;
    background-size:cover;
    background-position:center;
    padding: 10px;
    border: 1px solid red;
`

const Img = styled.img`
    width: 230px;
    height: 180px;
`

class Gallery extends Component {
  render() {
    return (
      <Wrapper>
        <GalleryBox>
          <ImgBox>
            <Img src="https://wallpaperaccess.com/full/335893.jpg" alt="First" />
          </ImgBox>
          <ImgBox>
            <Img src="https://wallpaperaccess.com/full/336022.jpg" alt="First" />
          </ImgBox>
          <ImgBox>
            <Img src="https://wallpaperaccess.com/full/336023.jpg" alt="First" />
          </ImgBox>
          <ImgBox>
            <Img src="https://wallpaperaccess.com/full/335910.jpg" alt="First" />
          </ImgBox>
          <ImgBox>
            <Img src="https://wallpaperaccess.com/full/181658.jpg" alt="First" />
          </ImgBox>
        </GalleryBox>
      </Wrapper>
    )
  }
}

export default Gallery
