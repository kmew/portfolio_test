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
    width: 670px;
    border-radius: 10px;
    border: 1px solid #D2DAC5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    @media (max-width: 768px) {
      width: 520px;
    }
    @media (max-width: 425px) {
      width: 350px;
    }
    @media (max-width: 425px) {
      width: 220px;
    }
    @media (max-width: 320px) {
      width: 180px;
    }
`

const ImgBox = styled.div`
    width: 200px;
    height: 200px;
    background-size:cover;
    background-position:center;
    padding: 10px;
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

const Overlay = styled.div`
  background: none;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
  :hover {
    background: rgba(169,169,169);
  }
`

class Gallery extends Component {
  render() {
    const {
      imgList,
    } = this.props

    const imgArray = []
    Object.entries(imgList).forEach(([key, value]) => {
      imgArray.push(
        <ImgBox>
          <Img src={value} alt={key} />
          <Overlay />
        </ImgBox>
      )
    })

    return (
      <Wrapper>
        <GalleryBox>
          {imgArray}
          {/* Modal */}
        </GalleryBox>
      </Wrapper>
    )
  }
}

export default Gallery
